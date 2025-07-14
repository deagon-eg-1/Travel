import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { cn } from '../lib/utils'

const StatsCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'positive', 
  icon: Icon, 
  className 
}) => {
  const isPositive = changeType === 'positive'
  
  return (
    <Card className={cn("card-hover", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-right">
          {title}
        </CardTitle>
        {Icon && (
          <div className="p-2 bg-primary/10 rounded-full">
            <Icon className="w-4 h-4 text-primary" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-right">{value}</div>
        {change && (
          <p className={cn(
            "text-xs text-right mt-1",
            isPositive ? "text-green-600" : "text-red-600"
          )}>
            <span className={cn(
              "inline-flex items-center",
              isPositive ? "text-green-600" : "text-red-600"
            )}>
              {isPositive ? '+' : ''}{change}
            </span>
            <span className="text-muted-foreground mr-1">من الشهر الماضي</span>
          </p>
        )}
      </CardContent>
    </Card>
  )
}

export default StatsCard