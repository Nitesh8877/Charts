import React, { useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import './Sidebar.css'

const menuItems = [
  { id: 'overview', label: 'Dashboard', icon: '📊' },
  { id: 'analytics', label: 'Analytics', icon: '📈' },
  { id: 'reports', label: 'Reports', icon: '📋' },
  { id: 'users', label: 'Users', icon: '👥' },
  { id: 'settings', label: 'Settings', icon: '⚙️' }
]

export default function Sidebar({ isOpen, onClose, activeTab, setActiveTab, isMobile }) {
  const { isDarkMode } = useTheme()

  // Close sidebar when clicking on overlay or pressing Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  const handleNavItemClick = (tabId) => {
    setActiveTab(tabId)
    onClose() // Always close sidebar after clicking a menu item
  }

  return (
    <>
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}
      <aside 
        className={`sidebar ${isOpen ? 'open' : ''} ${isDarkMode ? 'dark' : 'light'} ${isMobile ? 'mobile' : ''}`}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
      >
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <h2>Analytics Pro</h2>
            <span className="brand-subtitle">Dashboard</span>
          </div>
          <button 
            className="close-btn" 
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>
        
        <nav className="sidebar-nav" aria-label="Primary navigation">
          {menuItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => handleNavItemClick(item.id)}
              aria-current={activeTab === item.id ? 'page' : undefined}
            >
              <span className="nav-icon" aria-hidden="true">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="profile-avatar" aria-hidden="true">NK</div>
            <div className="profile-info">
              <div className="profile-name">Nitesh Kumar</div>
              <div className="profile-role">Admin</div>
              <div className="profile-status">
                <span className="status-indicator online"></span>
                Online
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}