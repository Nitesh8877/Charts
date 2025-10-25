import React, { useState, useEffect } from 'react'
import Header from './Header'
import Sidebar from './Sidebar'
import StatsCards from './StatsCards'
import ChartsGrid from './ChartsGrid'
import DataTable from './DataTable'
import QuickActions from './QuickActions'
import RecentActivity from './RecentActivity'
import { useTheme } from '../context/ThemeContext'
import './Dashboard.css'

export default function Dashboard() {
  const { isDarkMode } = useTheme()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024
      setIsMobile(mobile)
      // Auto-close sidebar when switching to mobile from desktop
      if (mobile && sidebarOpen) {
        setSidebarOpen(false)
      }
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [sidebarOpen])

  // Prevent body scroll when sidebar is open on mobile
  useEffect(() => {
    if (isMobile && sidebarOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [sidebarOpen, isMobile])

  const handleMenuClick = () => {
    console.log('Menu clicked, opening sidebar')
    setSidebarOpen(true)
  }

  const handleSidebarClose = () => {
    console.log('Closing sidebar')
    setSidebarOpen(false)
  }

  const handleTabChange = (tabId) => {
    console.log('Changing tab to:', tabId)
    setActiveTab(tabId)
    if (isMobile) {
      setSidebarOpen(false)
    }
  }

  return (
    <div className={`dashboard ${isDarkMode ? 'dark' : 'light'} ${sidebarOpen ? 'sidebar-open' : ''}`}>
      <Sidebar 
        isOpen={sidebarOpen} 
        onClose={handleSidebarClose}
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        isMobile={isMobile}
      />
      <div className="dashboard-main">
        <Header onMenuClick={handleMenuClick} isMobile={isMobile} />
        <div className="dashboard-content">
          {activeTab === 'overview' && (
            <>
              <StatsCards isMobile={isMobile} />
              <div className="dashboard-grid">
                <div className="main-content">
                  <ChartsGrid isMobile={isMobile} />
                  <DataTable isMobile={isMobile} />
                </div>
                <div className="sidebar-content">
                  <QuickActions isMobile={isMobile} />
                  <RecentActivity isMobile={isMobile} />
                </div>
              </div>
            </>
          )}
          {activeTab === 'analytics' && (
            <div className="analytics-view">
              <h2>Advanced Analytics</h2>
              <p>Detailed analytics view coming soon...</p>
            </div>
          )}
          {activeTab === 'reports' && (
            <div className="reports-view">
              <h2>Reports & Insights</h2>
              <p>Reports dashboard coming soon...</p>
            </div>
          )}
          {activeTab === 'users' && (
            <div className="users-view">
              <h2>User Management</h2>
              <p>User management panel coming soon...</p>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="settings-view">
              <h2>Settings</h2>
              <p>Settings panel coming soon...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}