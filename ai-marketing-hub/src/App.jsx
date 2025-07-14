import React, { useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Sidebar from './components/Sidebar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import { cn } from './lib/utils'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Sidebar */}
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        
        {/* Main Content */}
        <div className={cn(
          "transition-all duration-300 ease-in-out",
          "lg:mr-64" // Always leave space for sidebar on large screens
        )}>
          {/* Header */}
          <Header 
            sidebarOpen={sidebarOpen} 
            setSidebarOpen={setSidebarOpen} 
          />
          
          {/* Main Dashboard */}
          <main className="min-h-[calc(100vh-80px)]">
            <Dashboard />
          </main>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
