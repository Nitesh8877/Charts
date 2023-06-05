import React from 'react'
import {BarChart, CartesianGrid,XAxis,YAxis,Tooltip,Legend,Bar,ResponsiveContainer} from 'recharts'
import pdata from '../util/constant'
export default function BarCharts() {
  return (
    <>
        <h1 className='chart-heading'>Bar Chart</h1>
        <ResponsiveContainer width='100%' aspect={3} >
            <BarChart width={720} height={250} data={pdata} margin={{top:80,right:80,left:80,bottom:80}}>
                <CartesianGrid strokeDasharray='3 3'/>
                <XAxis dataKey='name'/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey='student' fill="#8884d8" />
            </BarChart>
        </ResponsiveContainer>
    </>
  )
}
