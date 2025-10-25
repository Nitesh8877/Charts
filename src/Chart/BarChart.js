import React from 'react'
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts'
import { useTheme } from '../context/ThemeContext'
import { generateTimeSeriesData } from '../util/constant'

export default function BarCharts({ timeRange }) {
  const { isDarkMode } = useTheme()
  const data = generateTimeSeriesData(timeRange)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart 
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
        <Bar dataKey="student" fill="#8884d8" radius={[4, 4, 0, 0]} />
        <Bar dataKey="users" fill="#82ca9d" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}