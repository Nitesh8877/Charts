import React from 'react'
import { useTheme } from '../context/ThemeContext'
import './QuickActions.css'

const actions = [
  { icon: '📊', label: 'Generate Report', color: '#6366f1' },
  { icon: '👥', label: 'Add User', color: '#10b981' },
  { icon: '📧', label: 'Send Email', color: '#f59e0b' },
  { icon: '🔄', label: 'Sync Data', color: '#8b5cf6' },
  { icon: '📥', label: 'Export Data', color: '#ef4444' },
  { icon: '⚙️', label: 'Settings', color: '#6b7280' }
]

export default function QuickActions() {
  const { isDarkMode } = useTheme()

  return (
    <div className={`quick-actions ${isDarkMode ? 'dark' : 'light'}`}>
      <h3>Quick Actions</h3>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <button
            key={index}
            className="action-btn"
            style={{ '--action-color': action.color }}
          >
            <span className="action-icon">{action.icon}</span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}