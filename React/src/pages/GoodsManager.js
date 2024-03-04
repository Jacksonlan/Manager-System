import React from 'react'
import "../css/GoodsManager.scss"
import Window from './Window';
import EditTable from './EditTable'

export default function GoodsManager() {
  return (
    <div className='GoodsManager'>
      <div className='Add'>
      <Window />
      </div>
      <EditTable />
    </div>
  )
}
