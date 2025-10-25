import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './RecentActivity.css'

const activities = [
  { 
    id: 1, 
    user: 'John Smith', 
    action: 'created new report', 
    time: '2 minutes ago', 
    icon: '📊',
    type: 'report'
  },
  { 
    id: 2, 
    user: 'Sarah Johnson', 
    action: 'updated user settings', 
    time: '15 minutes ago', 
    icon: '⚙️',
    type: 'settings'
  },
  { 
    id: 3, 
    user: 'Mike Wilson', 
    action: 'exported analytics data', 
    time: '1 hour ago', 
    icon: '📥',
    type: 'export'
  },
  { 
    id: 4, 
    user: 'Emily Davis', 
    action: 'added new dashboard', 
    time: '2 hours ago', 
    icon: '📈',
    type: 'dashboard'
  }
]

export default function RecentActivity() {
  const { isDarkMode } = useTheme()

  const getActivityColor = (type) => {
    const colors = {
      report: '#6366f1',
      settings: '#10b981',
      export: '#f59e0b',
      dashboard: '#8b5cf6'
    }
    return colors[type] || '#6b7280'
  }

  return (
    <div className={`recent-activity ${isDarkMode ? 'dark' : 'light'}`}>
      <div className="activity-header">
        <h3>Recent Activity</h3>
        <span className="activity-badge">{activities.length}</span>
      </div>
      <div className="activity-list">
        {activities.map(activity => (
          <div key={activity.id} className="activity-item">
            <div 
              className="activity-icon"
              style={{ backgroundColor: `${getActivityColor(activity.type)}20` }}
            >
              <span style={{ color: getActivityColor(activity.type) }}>
                {activity.icon}
              </span>
            </div>
            <div className="activity-content">
              <div className="activity-text">
                <strong>{activity.user}</strong> {activity.action}
              </div>
              <div className="activity-time">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}