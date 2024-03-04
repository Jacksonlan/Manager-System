import React, { useEffect, useState } from 'react'
import "../css/Left.scss"
// import { observer } from "mobx-react-lite"
import { Link, useLocation } from 'react-router-dom'

export default function Left() {
  useEffect(()=>{
    if(pathname!=='/home'){
      let p=pathname.slice(6)
      Setpath(p)
    }else{
      Setpath(pathname)
    }
  })
  const [path,Setpath]=useState()
  const {pathname}=useLocation()
  const titles=[
    {
      name:"首页",
      url:"/home"
    },
    {
      name:"用户管理",
      url:"user"
    },
    {
      name:"商品管理",
      url:"goods"
    },
    {
      name:"图片上传",
      url:"/upload"
    }
  ]
  const ClearSession=()=>{
    sessionStorage.clear()
  }

  return (
    <div className="Left">
      <div className='top'>{sessionStorage.getItem("account")}</div>
      {titles.map((item,i)=><Link to={item.url} className='a' key={i}><div className={path===item.url?'title':'subject'}>{item.name}</div></Link>)}
      <Link to="/" className='a' onClick={ClearSession}><div className='subject'>退出登录</div></Link>
    </div>
  )
}