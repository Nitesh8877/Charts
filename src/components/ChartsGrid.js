import React, { useState } from 'react'
import LineChart from '../Chart/LineChart'
import BarChart from '../Chart/BarChart'
import AreaChart from '../Chart/AreaChart'
import ComposedChart from '../Chart/ComposedChart'
import PieChart from '../Chart/PieChart'
import RadarChart from '../Chart/RadarChart'
import ScatterChart from '../Chart/ScatterChart'
import { useTheme } from '../context/ThemeContext'
import './ChartsGrid.css'

export default function ChartsGrid({ isMobile }) {
  const { isDarkMode } = useTheme()
  const [timeRange, setTimeRange] = useState('1m')

  const chartConfigs = [
    { Component: LineChart, title: 'Revenue Trend' },
    { Component: BarChart, title: 'User Activity' },
    { Component: AreaChart, title: 'Growth Analysis' },
    { Component: ComposedChart, title: 'Performance Metrics' },
    { Component: PieChart, title: 'Market Share' },
    { Component: RadarChart, title: 'Skill Assessment' },
    { Component: ScatterChart, title: 'Correlation Analysis' }
  ]

  return (
    <div className="charts-section">
      <div className="charts-header">
        <h2>Analytics Overview</h2>
        {!isMobile && (
          <div className="time-filter">
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              className={`time-select ${isDarkMode ? 'dark' : 'light'}`}
            >
              <option value="7d">Last 7 Days</option>
              <option value="30d">Last 30 Days</option>
              <option value="1m">Last Month</option>
              <option value="3m">Last 3 Months</option>
            </select>
          </div>
        )}
      </div>
      
      <div className="charts-grid">
        {chartConfigs.map(({ Component, title }, index) => (
          <div key={index} className={`chart-container ${isDarkMode ? 'dark' : 'light'} ${isMobile ? 'mobile' : ''}`}>
            <h3 className="chart-title">{title}</h3>
            <div className="chart-wrapper">
              <Component timeRange={timeRange} isMobile={isMobile} />
            </div>
          </div>
        ))}
      </div>
      
      {isMobile && (
        <div className="mobile-time-filter">
          <select 
            value={timeRange} 
            onChange={(e) => setTimeRange(e.target.value)}
            className={`time-select mobile ${isDarkMode ? 'dark' : 'light'}`}
          >
            <option value="7d">Last 7 Days</option>
            <option value="30d">Last 30 Days</option>
            <option value="1m">Last Month</option>
            <option value="3m">Last 3 Months</option>
          </select>
        </div>
      )}
    </div>
  )
}