import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Popconfirm, Table, Typography } from 'antd';
import api from '../util/request'

const EditableCell = ({
  editing,
  dataIndex,
  title,
  inputType,
  record,
  index,
  children,
  ...restProps
}) => {
  const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
  return (
    <td {...restProps}>
      {editing ? (
        <Form.Item
          name={dataIndex}
          style={{
            margin: 0,
          }}
          rules={[
            {
              required: true,
              message: `请输入 ${title}!`,
            },
          ]}
        >
          {inputNode}
        </Form.Item>
      ) : (
        children
      )}
    </td>
  );
};
const EditTable = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState();
  const [editingKey, setEditingKey] = useState('');
  const isEditing = (record) => record.load_id === editingKey;
  const edit = (record) => {
    form.setFieldsValue({
      name: '',
      age: '',
      address: '',
      ...record,
    });
    setEditingKey(record.load_id);
  };
  const cancel = () => {
    setEditingKey('');
  };
  useEffect(()=>{
    GetGoods()
  })

  const GetGoods=()=>{
    let url="/get_goods"
    api.get(url).then(res=>{
      if(res.data.code===200){
        setData(res.data.data)
      }else{
        console.log("获取商品数据失败!");
      }
    })
  }

const save = async (key) => {
    try {
      const row = await form.validateFields();
      row['load_id']=key
      let url='/update_good'
      api.post(url,row).then(res=>{
        if(res.data.code===200){
          console.log(res.data.data);
        }
        setEditingKey(''); 
      })
       
    } catch (errInfo) {
      console.log('Validate Failed:', errInfo);
    }
}
const del=(key)=>{
    let url="/remove_good"
    let data={load_id:key}
    api.get(url,data).then(res=>{
      if(res.data.code===200){
        alert("商品下架成功!")
      }
    })
}
  const columns = [
    {
      title: '商品编号',
      dataIndex: 'good_id',
      width: '6%',
      editable: true
    },
    {
      title: '商品名称',
      dataIndex: 'good_name',
      width: '8%',
      editable: true
    },
    {
      title: '商品介绍',
      dataIndex: 'introduce',
      width: '25%',
      editable: true
    },
    {
      title: '商品厂家',
      dataIndex: 'business',
      width: '20%',
      editable: true
    },
    {
      title: '商品规格',
      dataIndex: 'load',
      width: '10%',
      editable: true
    },
    {
      title: '商品价格',
      dataIndex: 'price',
      width: '10%',
      editable: true
    },
    {
      title: '库存数量',
      dataIndex: 'stock',
      width: '10%',
      editable: true
    },

    {
      title: '操作',
      dataIndex: 'operation',
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.load_id)}
              style={{
                marginRight: 8,
              }}
            >
              保存
            </Typography.Link>
            <Popconfirm title="确定取消?" onConfirm={cancel} okText="确认" cancelText="取消">
              <a>取消</a>
            </Popconfirm>
          </span>
        ) : (
          <>
          <Typography.Link style={{marginRight:'20px'}} disabled={editingKey !== ''} onClick={() => edit(record)}>
            编辑
          </Typography.Link>
           <Typography.Link disabled={editingKey !== ''} onClick={()=>del(record.load_id)}>
            下架
           </Typography.Link>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === 'age' ? 'number' : 'text',
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });
  return (
    <Form form={form} component={false}>
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={data}
        columns={mergedColumns}
        rowKey="load_id"
        rowClassName="editable-row"
        pagination={{
          onChange: cancel,
          pageSize:12,
        }}
      />
    </Form>
  );
};
export default EditTable;