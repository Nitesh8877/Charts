import React from 'react'
import {ResponsiveContainer,ComposedChart,XAxis,YAxis,Tooltip,Legend,Area,CartesianGrid,Bar,Line} from 'recharts'
import pdata from '../util/constant'
export default function ComposedCharts() {
  return (
    <>
    <h1 className='chart-heading'>Composed Chart</h1>
        <ResponsiveContainer width='100%' aspect={3}>
        <ComposedChart width={930} height={350} data={pdata} margin={{top:80,right:80,left:80,bottom:80}}>
            <XAxis dataKey='name'/>
            <YAxis/>
            <Tooltip/>
            <Legend/>
            <CartesianGrid stoke="#f5f5f5"/>
            <Area dataKey="student" fill='#8884d8'/>
            <Bar dataKey="fees" fill="#666"/>
            <Line dataKey="fees" fill="#ff7300"/>
        </ComposedChart>
        </ResponsiveContainer>

    </>
  )
}
