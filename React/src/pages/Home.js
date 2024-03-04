import React, { useEffect } from 'react'
import * as echarts from 'echarts';
import "../css/Home.scss"
import api from '../util/request'

export default function Home() {
  const dataList=[]
  const SetMap=()=>{
    let url="/set_maps"
    api.get(url).then(res=>{
      if(res.data.code===200){
        DrawMap(res.data.data)
      }
    })
}
const DrawMap=(list)=>{
  // 基于准备好的dom，初始化echarts实例
  var PieCharts = echarts.init(document.getElementById('Pie'));
  for(let i in list){
    let item={}
    item['value']=list[i].sell
    item['name']=list[i].good_name
    dataList.push(item)
  }
  PieCharts.setOption({
    title: {
      text: '销售比例'
    },
    tooltip:{},
    series: [
      {
        type: 'pie',
        data:dataList
      }
    ]
  })
  // 平滑曲线图
  var myChart = echarts.init(document.getElementById('line'));
  // 绘制图表
  myChart.setOption({
    title: {
      text: '销售总额'
    },
    xAxis: {
      data: list.map(item=>item.good_name)
    },
    tooltip: {},
    yAxis: {},
    series: [
      {
        data: list.map(item=>item.sellPrice),
        type: 'line',
        smooth: true
      }
    ]
  });
  var myChart = echarts.init(document.getElementById('tab'));
  // 绘制图表
  myChart.setOption({
    title: {
      text: '总库存'
    },
    tooltip: {},
    xAxis: {
      data: list.map(item=>item.good_name)
    },
    yAxis: {},
    series: [
      {
        name: '剩余库存',
        type: 'bar',
        data: list.map(item=>item.stock)
      }
    ]
  });
  }

  useEffect(()=>{
    SetMap()
})
  return (
    <>
    <div className='Home'>
    <div id='Pie' className='Pie'></div>
    <div id='tab' className='Bar'></div>
    </div>
    <div className='Total'>
    <div id='line' className='Line'></div>
    </div>
    </>
  )
}
