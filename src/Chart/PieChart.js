import React from 'react'
import {PieChart,Pie} from "recharts"
import pdata from '../util/constant'
export default function PieCharts() {
  return (
    <>
    <h1 className='chart-heading'>Pie Chart</h1>
    <PieChart width={730} height={250} data={pdata}>
  <Pie  dataKey="value" nameKey="student" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />
  <Pie  dataKey="value" nameKey="student" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
</PieChart>
   <h3 style={{textAlign:'center',color:'darkcyan',margin:'20px'}}>@copyright nitesh kumar 2023</h3> 
    </>
  )
}
