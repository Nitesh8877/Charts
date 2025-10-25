import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import './DataTable.css'

const initialData = [
  { id: 1, name: 'John Smith', email: 'john@example.com', status: 'Active', revenue: '$2,450', trend: '+12%' },
  { id: 2, name: 'Sarah Johnson', email: 'sarah@example.com', status: 'Active', revenue: '$1,890', trend: '+8%' },
  { id: 3, name: 'Mike Wilson', email: 'mike@example.com', status: 'Inactive', revenue: '$980', trend: '-3%' },
  { id: 4, name: 'Emily Davis', email: 'emily@example.com', status: 'Active', revenue: '$3,210', trend: '+15%' },
  { id: 5, name: 'Alex Brown', email: 'alex@example.com', status: 'Pending', revenue: '$1,230', trend: '+5%' }
]

export default function DataTable() {
  const { isDarkMode } = useTheme()
  const [data, setData] = useState(initialData)
  const [sortField, setSortField] = useState('name')
  const [sortDirection, setSortDirection] = useState('asc')

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const sortedData = [...data].sort((a, b) => {
    const aValue = a[sortField]
    const bValue = b[sortField]
    
    if (sortDirection === 'asc') {
      return aValue < bValue ? -1 : 1
    } else {
      return aValue > bValue ? -1 : 1
    }
  })

  const getStatusBadge = (status) => {
    const statusConfig = {
      Active: { color: '#10b981', bg: '#ecfdf5' },
      Inactive: { color: '#6b7280', bg: '#f3f4f6' },
      Pending: { color: '#f59e0b', bg: '#fffbeb' }
    }
    const config = statusConfig[status] || statusConfig.Inactive
    
    return (
      <span 
        className="status-badge"
        style={{ 
          color: config.color, 
          backgroundColor: isDarkMode ? '#1f2937' : config.bg,
          border: `1px solid ${config.color}20`
        }}
      >
        {status}
      </span>
    )
  }

  return (
    <div className={`data-table-section ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="table-header">
        <h3>Recent Transactions</h3>
        <button className="export-btn">Export CSV</button>
      </div>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th onClick={() => handleSort('name')}>
                Customer
                {sortField === 'name' && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th onClick={() => handleSort('email')}>
                Email
                {sortField === 'email' && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th onClick={() => handleSort('status')}>
                Status
                {sortField === 'status' && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th onClick={() => handleSort('revenue')}>
                Revenue
                {sortField === 'revenue' && (sortDirection === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {sortedData.map(row => (
              <tr key={row.id}>
                <td>
                  <div className="customer-cell">
                    <div className="customer-avatar">
                      {row.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="customer-info">
                      <div className="customer-name">{row.name}</div>
                    </div>
                  </div>
                </td>
                <td>{row.email}</td>
                <td>{getStatusBadge(row.status)}</td>
                <td className="revenue-cell">{row.revenue}</td>
                <td>
                  <span className={`trend ${row.trend.includes('+') ? 'positive' : 'negative'}`}>
                    {row.trend}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}