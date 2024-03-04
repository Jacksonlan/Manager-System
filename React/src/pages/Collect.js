import React from 'react'
import Left from './Left'
import Bottom from './Bottom'
import "../css/Collect.scss"
import { Outlet } from 'react-router-dom'

function Collect() {
  return (
    <div className='Collect'>
    <Left />
    <div className='Center'>
      <Outlet />
    <footer><Bottom /></footer>
    </div>
    </div>
  )
}
export default Collect;