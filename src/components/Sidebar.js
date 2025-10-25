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

    const handleClickOutside = (e) => {
      if (isOpen && e.target.classList.contains('sidebar-overlay')) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isOpen, onClose])

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && isOpen) {
      document.body.classList.add('sidebar-open-mobile')
    } else {
      document.body.classList.remove('sidebar-open-mobile')
    }

    return () => {
      document.body.classList.remove('sidebar-open-mobile')
    }
  }, [isOpen, isMobile])

  const handleNavItemClick = (tabId) => {
    console.log('Nav item clicked:', tabId)
    setActiveTab(tabId)
    onClose()
  }

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <>
      {isOpen && (
        <div 
          className="sidebar-overlay" 
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}
      
      <aside 
        className={`sidebar ${isOpen ? 'sidebar-open' : 'sidebar-closed'} ${isDarkMode ? 'dark' : 'light'}`}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
      >
        <div className="sidebar-header">
          <div className="sidebar-brand">
            <h2>Analytics Pro</h2>
            <span className="brand-subtitle">Dashboard</span>
          </div>
          <button 
            className="sidebar-close-btn" 
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <span className="close-icon">×</span>
          </button>
        </div>
        
        <nav className="sidebar-nav">
          <div className="nav-section">
            <div className="nav-section-label">Main Menu</div>
            {menuItems.map(item => (
              <button
                key={item.id}
                className={`nav-item ${activeTab === item.id ? 'nav-item-active' : ''}`}
                onClick={() => handleNavItemClick(item.id)}
                aria-current={activeTab === item.id ? 'page' : undefined}
              >
                <span className="nav-item-icon" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="nav-item-label">
                  {item.label}
                </span>
                {activeTab === item.id && (
                  <span className="nav-item-indicator" aria-hidden="true"></span>
                )}
              </button>
            ))}
          </div>
        </nav>
        
        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              <span>NK</span>
            </div>
            <div className="user-info">
              <div className="user-name">Nitesh Kumar</div>
              <div className="user-role">Administrator</div>
              <div className="user-status">
                <span className="status-dot online"></span>
                <span className="status-text">Online</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}