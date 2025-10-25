import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext'
import './Header.css'

export default function Header({ onMenuClick, isMobile }) {
  const { isDarkMode, toggleTheme } = useTheme()
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  const notifications = [
    { id: 1, message: 'New user registered', time: '5 min ago', unread: true },
    { id: 2, message: 'System update completed', time: '1 hour ago', unread: true },
    { id: 3, message: 'Weekly report generated', time: '2 hours ago', unread: false }
  ]

  const unreadCount = notifications.filter(n => n.unread).length

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsOpen && !event.target.closest('.notification-wrapper')) {
        setNotificationsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [notificationsOpen])

  return (
    <header className="dashboard-header">
      <div className="header-left">
        <button 
          className="menu-btn" 
          onClick={onMenuClick} 
          aria-label="Open menu"
          aria-expanded="false"
        >
          <span className="menu-icon">☰</span>
        </button>
        {!isMobile && (
          <div className="breadcrumb">
            <span>Dashboard</span>
            <span className="separator">/</span>
            <span className="current">Overview</span>
          </div>
        )}
      </div>

      <div className="header-right">
        {!isMobile ? (
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Search analytics..." 
              className={`search-input ${isDarkMode ? 'dark' : 'light'}`}
            />
            <span className="search-icon">🔍</span>
          </div>
        ) : (
          <button 
            className="search-toggle"
            onClick={() => setSearchOpen(!searchOpen)}
            aria-label="Search"
          >
            🔍
          </button>
        )}

        <div className="header-actions">
          <div className="notification-wrapper">
            <button 
              className="notification-btn"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              aria-label={`Notifications ${unreadCount > 0 ? `${unreadCount} unread` : ''}`}
            >
              <span className="notification-icon">🔔</span>
              {unreadCount > 0 && (
                <span className="notification-badge">{unreadCount}</span>
              )}
            </button>
            
            {notificationsOpen && (
              <div className={`notification-dropdown ${isDarkMode ? 'dark' : 'light'}`}>
                <div className="notification-header">
                  <h3>Notifications</h3>
                  <span className="notification-count">{unreadCount} new</span>
                </div>
                <div className="notification-list">
                  {notifications.map(notification => (
                    <div key={notification.id} className={`notification-item ${notification.unread ? 'unread' : ''}`}>
                      <div className="notification-message">{notification.message}</div>
                      <div className="notification-time">{notification.time}</div>
                    </div>
                  ))}
                </div>
                <div className="notification-footer">
                  <button className="view-all-btn">View All Notifications</button>
                </div>
              </div>
            )}
          </div>

          <button 
            className={`theme-toggle ${isDarkMode ? 'dark' : 'light'}`}
            onClick={toggleTheme}
            aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>

          {!isMobile && (
            <div className="user-menu">
              <div className="user-avatar">NK</div>
              <div className="user-info">
                <span className="user-name">Nitesh Kumar</span>
                <span className="user-status">Online</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Search Overlay */}
      {isMobile && searchOpen && (
        <div className="mobile-search-overlay">
          <div className="mobile-search-container">
            <input 
              type="text" 
              placeholder="Search analytics..." 
              className="mobile-search-input"
              autoFocus
            />
            <button 
              className="close-search"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </header>
  )
}