import React from 'react'
import { ResponsiveContainer, ComposedChart, XAxis, YAxis, Tooltip, Legend, Area, CartesianGrid, Bar, Line } from 'recharts'
import { useTheme } from '../context/ThemeContext'
import { generateTimeSeriesData } from '../util/constant'

export default function ComposedCharts({ timeRange }) {
  const { isDarkMode } = useTheme()
  const data = generateTimeSeriesData(timeRange)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
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
          fill="#8884d8" 
          stroke="#8884d8"
          fillOpacity={0.6}
        />
        <Bar 
          dataKey="fees" 
          barSize={20} 
          fill="#413ea0" 
          radius={[4, 4, 0, 0]}
        />
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#ff7300" 
          strokeWidth={3}
          dot={{ fill: '#ff7300', strokeWidth: 2, r: 4 }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  )
}