import React from 'react'
import { ResponsiveContainer, Area, AreaChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'
import { useTheme } from '../context/ThemeContext'
import { generateTimeSeriesData } from '../util/constant'

export default function AreaCharts({ timeRange }) {
  const { isDarkMode } = useTheme()
  const data = generateTimeSeriesData(timeRange)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
      >
        <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#404040' : '#e5e7eb'} />
        <XAxis 
          dataKey="name" 
          stroke={isDarkMode ? '#e5e7eb' : '#374151'}
          fontSize={12}
        />
        <YAxis 
          stroke={isDarkMode ? '#e5e7eb' : '#374151'}
          fontSize={12}
        />
        <Tooltip 
          contentStyle={{
            backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
            border: `1px solid ${isDarkMode ? '#404040' : '#e5e7eb'}`,
            borderRadius: '8px',
            color: isDarkMode ? '#e5e7eb' : '#374151'
          }}
        />
        <Legend />
        <Area 
          type="monotone" 
          dataKey="student" 
          stackId="1"
          stroke="#8884d8" 
          fill="#8884d8" 
          fillOpacity={0.6}
        />
        <Area 
          type="monotone" 
          dataKey="users" 
          stackId="1"
          stroke="#82ca9d" 
          fill="#82ca9d" 
          fillOpacity={0.6}
        />
      </AreaChart>
    </ResponsiveContainer>
  )
}