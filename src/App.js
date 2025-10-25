import React, { useState } from 'react'
import './App.css'
import Dashboard from './components/Dashboard'
import { ThemeProvider } from './context/ThemeContext'

export default function App() {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  )
}
