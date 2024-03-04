import React,{useState} from 'react'
import { Button, Modal, Input, Form } from 'antd';
import api from '../util/request'

export default function Window() {
    const [clear,setClear]=useState(false)
    const [open, setOpen] = useState(false);
    const showModal = () => {
      setOpen(true);
    };
    const handleOk = async (values) => {
      console.log(values);
      // let url='/add_good'
      // let data=values
      // await api.post(url,data).then(res=>{
      //   if(res.data.code===200){
      //     console.log("上架成功!");
      //   }
      //   setOpen(false);
      //   setClear(true)
      // })
    };
    const handleCancel = () => {
      setOpen(false)
      setClear(true)
    };
  return (
    <div className='Add'>
       <Button type="primary" onClick={showModal}>
        上架商品
      </Button>
      <Modal
        open={open}
        title="上架商品"
        closable={false}
        destroyOnClose={clear}
        footer={null}
      >
    <Form
      name="basic"
      labelCol={{
      span: 5,
    }}
    wrapperCol={{
      span: 50,
    }}
    style={{
      maxWidth: 400,
    }}
    onFinish={handleOk}
    onFinishFailed={handleCancel}
    autoComplete="off"
  >
    <Form.Item
      label="商品编号"
      name="good_id"
      rules={[
        {
          required: true,
          message: '请输入商品编号',
        },
      ]}
    >
      <Input placeholder='新增商品此项不填 (必填)' />
    </Form.Item>
    <Form.Item
      label="商品名称"
      name="good_name"
      rules={[
        {
          required: true,
          message: '请输入商品名称',
        }
      ]}
    >
      <Input placeholder='请输入商品名称 (必填)' />
    </Form.Item>

    <Form.Item
      label="商品介绍"
      name="introduce"
      rules={[
        {
          required: true,
          message: '请输入商品介绍',
        },
      ]}
    >
      <Input maxLength={30} placeholder='请输入商品介绍 (必填)' />
    </Form.Item>
    <Form.Item
      label="售卖商家"
      name="business"
      rules={[
        {
          required: true,
          message: '请输入售卖商家',
        },
      ]}
    >
      <Input placeholder='请输入售卖商家 (必填)' />
    </Form.Item>
    <Form.Item
      label="商品价格"
      name="price"
      rules={[
        {
          required: true,
          message: '请输入商品价格',
        },
      ]}
    >
      <Input placeholder='请输入商品价格 (必填)' />
    </Form.Item>
    <Form.Item
      label="商品规格"
      name="load"
      rules={[
        {
          required: true,
          message: '请输入商品规格',
        },
      ]}
    >
      <Input placeholder='请输入商品规格 (必填)' />
    </Form.Item>
    <Form.Item
      label="库存数量"
      name="stock"
      rules={[
        {
          required: true,
          message: '请输入库存数量',
        },
      ]}
    >
      <Input placeholder='请输入库存数量 (必填)' />
    </Form.Item>
    <Form.Item
      wrapperCol={{
        offset: 15,
        span: 16,
      }}
    >
      <Button htmlType="submit"  type="primary" style={{marginRight:'20px'}}  >
          确认
      </Button>
      <Button key="back" onClick={handleCancel}>
          取消
      </Button>
    </Form.Item>
  </Form>
</Modal>
    </div>
  )
}

