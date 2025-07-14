import React, { useState } from 'react'
import { 
  LayoutDashboard, 
  Bot, 
  BarChart3, 
  Settings, 
  Users, 
  Target, 
  TrendingUp,
  Bell,
  Menu,
  X,
  Sun,
  Moon
} from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '../contexts/ThemeContext'
import { cn } from '../lib/utils'

const Sidebar = ({ isOpen, setIsOpen }) => {
  const { theme, toggleTheme } = useTheme()
  const [activeItem, setActiveItem] = useState('dashboard')

  const menuItems = [
    { id: 'dashboard', label: 'لوحة التحكم', icon: LayoutDashboard },
    { id: 'ai-tools', label: 'أدوات الذكاء الاصطناعي', icon: Bot },
    { id: 'analytics', label: 'التحليلات', icon: BarChart3 },
    { id: 'campaigns', label: 'الحملات', icon: Target },
    { id: 'performance', label: 'الأداء', icon: TrendingUp },
    { id: 'users', label: 'المستخدمين', icon: Users },
    { id: 'notifications', label: 'الإشعارات', icon: Bell },
    { id: 'settings', label: 'الإعدادات', icon: Settings },
  ]

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={cn(
        "fixed top-0 right-0 h-full bg-card border-l shadow-lg z-50 sidebar-transition",
        "flex flex-col w-64",
        isOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
      )}>
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-lg font-bold gradient-text">AI Marketing Hub</h1>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "w-full flex items-center space-x-3 space-x-reverse px-4 py-3 rounded-lg text-right transition-colors",
                  activeItem === item.id 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleTheme}
            className="w-full justify-start space-x-2 space-x-reverse"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            <span>{theme === 'light' ? 'الوضع المظلم' : 'الوضع المضيء'}</span>
          </Button>
        </div>
      </div>
    </>
  )
}

export default Sidebar