import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { useTheme } from '../context/ThemeContext'

const data01 = [
  { x: 100, y: 200, z: 200 },
  { x: 120, y: 100, z: 260 },
  { x: 170, y: 300, z: 400 },
  { x: 140, y: 250, z: 280 },
  { x: 150, y: 400, z: 500 },
  { x: 110, y: 280, z: 200 },
];

const data02 = [
  { x: 200, y: 260, z: 240 },
  { x: 240, y: 290, z: 220 },
  { x: 190, y: 290, z: 250 },
  { x: 198, y: 250, z: 210 },
  { x: 180, y: 280, z: 260 },
  { x: 210, y: 220, z: 230 },
];

export default function ScatterChartComponent() {
  const { isDarkMode } = useTheme()

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
        <CartesianGrid stroke={isDarkMode ? '#404040' : '#e5e7eb'} />
        <XAxis 
          type="number" 
          dataKey="x" 
          name="stature" 
          unit="cm"
          tick={{ fill: isDarkMode ? '#e5e7eb' : '#374151', fontSize: 12 }}
        />
        <YAxis 
          type="number" 
          dataKey="y" 
          name="weight" 
          unit="kg"
          tick={{ fill: isDarkMode ? '#e5e7eb' : '#374151', fontSize: 12 }}
        />
        <Tooltip 
          cursor={{ strokeDasharray: '3 3' }}
          contentStyle={{
            backgroundColor: isDarkMode ? '#2d2d2d' : '#ffffff',
            border: `1px solid ${isDarkMode ? '#404040' : '#e5e7eb'}`,
            borderRadius: '8px',
            color: isDarkMode ? '#e5e7eb' : '#374151'
          }}
        />
        <Legend />
        <Scatter name="Group A" data={data01} fill="#8884d8" />
        <Scatter name="Group B" data={data02} fill="#82ca9d" />
      </ScatterChart>
    </ResponsiveContainer>
  )
}