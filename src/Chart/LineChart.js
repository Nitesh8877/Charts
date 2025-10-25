
import { ResponsiveContainer, CartesianGrid, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts'
import { useTheme } from '../context/ThemeContext'
import { generateTimeSeriesData } from '../util/constant'

export default function LineChartComponent({ timeRange }) {
  const { isDarkMode } = useTheme()
  const data = generateTimeSeriesData(timeRange)

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart 
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
        <Line 
          type="monotone" 
          dataKey="revenue" 
          stroke="#8884d8" 
          strokeWidth={3}
          dot={{ fill: '#8884d8', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#8884d8', strokeWidth: 2 }}
        />
        <Line 
          type="monotone" 
          dataKey="users" 
          stroke="#82ca9d" 
          strokeWidth={3}
          dot={{ fill: '#82ca9d', strokeWidth: 2, r: 4 }}
          activeDot={{ r: 6, stroke: '#82ca9d', strokeWidth: 2 }}
        />
      </LineChart>
    </ResponsiveContainer>
  )
}