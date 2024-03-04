import React, { useEffect, useState } from 'react'
import { Table } from 'antd';
import "../css/UserManager.scss"
import api from '../util/request'

export default function UserManager() {
  const columns = [
    {
      title: '用户编号',
      dataIndex: 'uid'
    },
    {
      title: '账号名',
      dataIndex: 'username'
    },
    {
      title: 'Action',
      dataIndex: 'delete',
      key: 'x',
      render: (_, record) =><a onClick={()=>DelUser(record.uid)}>删除</a>,
    },
  ];
  const [data,setData]=useState()
  useEffect(()=>{
    GetUser();
  })
  const GetUser=()=>{
    let url="/get_users"
    api.get(url).then(res=>{
      if(res.data.code===200){
        setData(res.data.data)
      }else{
        console.log("获取数据失败!");
      }
    })
  }
  const DelUser=(key)=>{
    let url="/del_user"
    let data={
      uid:key
    }
    api.get(url,data).then(res=>{
      if(res.data.code===200){
        console.log(res);
      }
    })
  }
  return (
    <div className='UserManager'>
      <Table
          columns={columns}
          dataSource={data}
          rowKey="uid"
        />
    </div>
  )
}
