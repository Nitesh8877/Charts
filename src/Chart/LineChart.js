import React from 'react'
import {ResponsiveContainer,
  CartesianGrid,
  LineChart,Line, XAxis,YAxis,Tooltip,Legend} from 'recharts'

import pdata from '../util/constant'

export default function LineCharts() {

  return (
    <>
    <h1 className='chart-heading'>
    Line Chart
    </h1>
    <ResponsiveContainer width="100%" aspect={3} >
    <LineChart data={pdata}
    width={500} height={300} margin={{top:80,right:80,left:80,bottom:80}}
    >
      <CartesianGrid strokeDasharray='3 3'/>
      <XAxis dataKey="name" interval={'preserveStartEnd'}/>
      <YAxis/>
      <Tooltip />
    <Legend />
    <Line dataKey='student'/>
    </LineChart>
    </ResponsiveContainer>
    </>
  )
}
