import React from 'react'
import "../css/Login.scss"
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input,Alert } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import api from '../util/request'

function Login() {
    const navigate=useNavigate()
    const [success,Setsuccess]=useState(false)
    const [error,Seterror]=useState(false)
    const onFinish = (values) => {
      let url="/admin_login"
      let data={
        account:values.username,
        password:values.password
      }
      api.post(url,data).then(res=>{
        if(res.data.code===200){
          Setsuccess(true)
          sessionStorage.setItem("account",res.data.data.account)
          sessionStorage.setItem("aid",res.data.data.admin_id)
          var time=setInterval(()=>{
            navigate("/home",{replace:true})
            clearInterval(time)
          },500)
        }else{
          Seterror(true)
          var out=setInterval(()=>{
            Seterror(false)
            clearInterval(out)
          },1000)
        }
      })

      
    }
  return (
    <div className='Login'>
      {success?
      <div className='Alert'>
        <Alert message="登录成功!" type="success" showIcon style={{padding:"10px"}} />
      </div>
      :''
      }
      {error?
        <div className='Alert'>
        <Alert message="您的账号或密码有误!" type="error" showIcon style={{padding:"10px"}} />
        </div>
        :''
      }
      <div className='table'>
      <h1>商城后台管理</h1>
      <Form
      name="normal_login"
      className="login-form"
      onFinish={onFinish}
    >

      <Form.Item
       wrapperCol={{
        style: {
          width: '300px'
        }
      }}
        name="username"
        rules={[
          {
            required: true,
            message: '请输入您的账号'
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: '请输入您的密码',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{width:'500px',height:'40px'}}>
          登录
        </Button>
      </Form.Item>
    </Form>
      </div>
    </div>
  )
}
export default Login;