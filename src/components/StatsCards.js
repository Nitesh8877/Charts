import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './StatsCards.css'

const StatsCards = ({ isMobile }) => {
  const { isDarkMode } = useTheme()

  const statsData = [
    { 
      title: 'Total Revenue', 
      value: '$284,567', 
      change: '+12.5%', 
      icon: '💰',
      trend: [30, 45, 52, 38, 65, 70, 90, 85, 78, 82, 88, 92],
      description: 'Monthly revenue growth'
    },
    { 
      title: 'Active Users', 
      value: '12,458', 
      change: '+8.2%', 
      icon: '👥',
      trend: [25, 30, 38, 42, 48, 52, 58, 55, 60, 65, 68, 72],
      description: 'Active users this month'
    },
    { 
      title: 'Conversion Rate', 
      value: '4.8%', 
      change: '+2.1%', 
      icon: '📈',
      trend: [2.1, 2.5, 3.2, 3.8, 4.2, 4.0, 4.5, 4.3, 4.6, 4.7, 4.8, 5.0],
      description: 'Overall conversion rate'
    },
    { 
      title: 'Avg. Session', 
      value: '4m 32s', 
      change: '-1.3%', 
      icon: '⏱️',
      trend: [300, 280, 320, 310, 290, 270, 265, 272, 268, 270, 272, 275],
      description: 'Average session duration'
    }
  ]

  const renderSparkline = (trend, isMobile) => {
    if (isMobile) return null // Hide sparkline on mobile to save space
    
    const max = Math.max(...trend)
    const min = Math.min(...trend)
    const range = max - min
    
    return (
      <div className="sparkline">
        {trend.map((value, index) => (
          <div
            key={index}
            className="sparkline-bar"
            style={{
              height: `${((value - min) / range) * 100}%`,
              backgroundColor: value === trend[trend.length - 1] 
                ? (statsData.find(s => s.trend === trend)?.change.includes('+') ? '#10b981' : '#ef4444')
                : (isDarkMode ? '#404040' : '#e5e7eb')
            }}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="stats-section">
      <div className="stats-header">
        <h2>Key Metrics</h2>
        {!isMobile && (
          <div className="stats-period">
            <select className={`period-select ${isDarkMode ? 'dark' : 'light'}`}>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
          </div>
        )}
      </div>
      <div className="stats-cards">
        {statsData.map((stat, index) => (
          <div key={index} className={`stat-card ${isDarkMode ? 'dark' : 'light'} ${isMobile ? 'mobile' : ''}`}>
            <div className="stat-main">
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <h3 className="stat-title">{stat.title}</h3>
                <div className="stat-value">{isMobile ? stat.value.replace('$', '$ ') : stat.value}</div>
                <div className={`stat-change ${stat.change.includes('+') ? 'positive' : 'negative'}`}>
                  {stat.change} from last month
                </div>
              </div>
              {!isMobile && (
                <div className="stat-sparkline">
                  {renderSparkline(stat.trend, isMobile)}
                </div>
              )}
            </div>
            {!isMobile && (
              <div className="stat-footer">
                <span className="stat-description">{stat.description}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsCards