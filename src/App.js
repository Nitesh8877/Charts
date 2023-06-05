import React from 'react'
import './App.css'
import LineChart from './Chart/LineChart'
import BarChart from './Chart/BarChart'
import AreaChart from './Chart/AreaChart'
import ComposedChart from './Chart/ComposedChart'
import PieCharts from './Chart/PieChart'

export default function App() {

  return (
    <>
    <LineChart/>
    <BarChart/>
    <AreaChart/>
    <ComposedChart/>
    <PieCharts/>
    </>
  )
}
