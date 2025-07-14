import React from 'react'
import { Menu, Bell, User, Search } from 'lucide-react'
import { Button } from './ui/button'
import { cn } from '../lib/utils'

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="bg-card border-b px-6 py-4 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Left side - Menu button and Search */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="lg:hidden"
          >
            <Menu className="w-5 h-5" />
          </Button>
          
          <div className="hidden md:flex items-center space-x-2 bg-muted rounded-lg px-3 py-2 min-w-[300px]">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="ابحث في المنصة..."
              className="bg-transparent border-none outline-none text-sm w-full text-right"
            />
          </div>
        </div>

        {/* Right side - User actions */}
        <div className="flex items-center space-x-3">
          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </Button>

          {/* User Profile */}
          <div className="flex items-center space-x-2 space-x-reverse">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-medium">أحمد محمد</p>
              <p className="text-xs text-muted-foreground">مدير التسويق</p>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header