import React from 'react'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend } from 'recharts'
import { useTheme } from '../context/ThemeContext'

const radarData = [
  { subject: 'Math', A: 120, B: 110 },
  { subject: 'Chinese', A: 98, B: 130 },
  { subject: 'English', A: 86, B: 130 },
  { subject: 'Geography', A: 99, B: 100 },
  { subject: 'Physics', A: 85, B: 90 },
  { subject: 'History', A: 65, B: 85 },
]

export default function RadarChartComponent() {
  const { isDarkMode } = useTheme()

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
        <PolarGrid stroke={isDarkMode ? '#404040' : '#e5e7eb'} />
        <PolarAngleAxis 
          dataKey="subject" 
          tick={{ fill: isDarkMode ? '#e5e7eb' : '#374151', fontSize: 11 }}
        />
        <PolarRadiusAxis 
          angle={30} 
          domain={[0, 150]}
          tick={{ fill: isDarkMode ? '#e5e7eb' : '#374151', fontSize: 10 }}
        />
        <Radar 
          name="Student A" 
          dataKey="A" 
          stroke="#8884d8" 
          fill="#8884d8" 
          fillOpacity={0.6} 
        />
        <Radar 
          name="Student B" 
          dataKey="B" 
          stroke="#82ca9d" 
          fill="#82ca9d" 
          fillOpacity={0.6} 
        />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
  )
}