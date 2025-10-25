import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import { useTheme } from '../context/ThemeContext'
import { pieData } from '../util/constant'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#82ca9d'];

export default function PieCharts() {
  const { isDarkMode } = useTheme()

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{
            backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
            border: `1px solid ${isDarkMode ? '#404040' : '#e5e7eb'}`,
            borderRadius: '8px',
            color: isDarkMode ? '#e5e7eb' : '#374151'
          }}
        />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}