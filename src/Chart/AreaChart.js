import React from 'react'
import pdata from '../util/constant'
import {Area,AreaChart,XAxis,YAxis,Tooltip,Legend} from 'recharts'
export default function AreaCharts() {
  return(
    <>
        <h1 className='chart-heading'> Area Chart</h1>
        <AreaChart
  width={930}
  height={350}
  data={pdata}
  margin={{top:80,right:80,left:80,bottom:80}}
>
  <XAxis dataKey="name" />
  <YAxis />
  <Area dataKey="student" stroke="#8884d8" fill="#82ca9d" />
  <Tooltip />
  <Legend/>
</AreaChart>
    </>
  )
}
