import React from 'react'
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  MousePointer,
  Bot,
  Target,
  BarChart3,
  Activity
} from 'lucide-react'
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell
} from 'recharts'
import StatsCard from './StatsCard'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'

const Dashboard = () => {
  // Sample data for charts
  const lineChartData = [
    { name: 'يناير', value: 400 },
    { name: 'فبراير', value: 300 },
    { name: 'مارس', value: 600 },
    { name: 'أبريل', value: 800 },
    { name: 'مايو', value: 500 },
    { name: 'يونيو', value: 900 },
  ]

  const barChartData = [
    { name: 'فيسبوك', value: 400 },
    { name: 'جوجل', value: 300 },
    { name: 'إنستغرام', value: 200 },
    { name: 'تويتر', value: 100 },
  ]

  const pieChartData = [
    { name: 'عملاء جدد', value: 400, color: '#0088FE' },
    { name: 'عملاء عائدون', value: 300, color: '#00C49F' },
    { name: 'عملاء محتملون', value: 200, color: '#FFBB28' },
  ]

  const aiTools = [
    { name: 'تحليل المشاعر', description: 'تحليل آراء العملاء تلقائياً', icon: Bot },
    { name: 'تحسين الحملات', description: 'تحسين الحملات الإعلانية بالذكاء الاصطناعي', icon: Target },
    { name: 'التنبؤ بالمبيعات', description: 'توقع المبيعات المستقبلية', icon: TrendingUp },
    { name: 'تجميع البيانات', description: 'تحليل وتجميع البيانات التسويقية', icon: BarChart3 },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col space-y-2">
        <h1 className="text-3xl font-bold text-right">لوحة التحكم</h1>
        <p className="text-muted-foreground text-right">
          مرحباً بك في منصة AI Marketing Hub - منصتك الشاملة للتسويق الذكي
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="إجمالي الزوار"
          value="12,345"
          change="+12.5%"
          changeType="positive"
          icon={Users}
        />
        <StatsCard
          title="الإيرادات"
          value="$45,231"
          change="+8.3%"
          changeType="positive"
          icon={DollarSign}
        />
        <StatsCard
          title="معدل التحويل"
          value="3.24%"
          change="+2.1%"
          changeType="positive"
          icon={MousePointer}
        />
        <StatsCard
          title="النمو الشهري"
          value="23.1%"
          change="-1.2%"
          changeType="negative"
          icon={TrendingUp}
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-right">تطور المبيعات</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-right">أداء المنصات</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={barChartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* AI Tools Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-right flex items-center space-x-2 space-x-reverse">
            <Bot className="w-5 h-5" />
            <span>أدوات الذكاء الاصطناعي</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon
              return (
                <div
                  key={index}
                  className="p-4 border rounded-lg hover:bg-accent transition-colors cursor-pointer"
                >
                  <div className="flex items-center space-x-3 space-x-reverse mb-2">
                    <Icon className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold text-right">{tool.name}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground text-right">
                    {tool.description}
                  </p>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Customer Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-right">توزيع العملاء</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={pieChartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pieChartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {pieChartData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-sm">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* System Status */}
        <Card>
          <CardHeader>
            <CardTitle className="text-right flex items-center space-x-2 space-x-reverse">
              <Activity className="w-5 h-5" />
              <span>حالة النظام</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="text-right">
                  <p className="font-medium text-green-800 dark:text-green-200">
                    نظام المراقبة الذاتية
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    يعمل بشكل طبيعي
                  </p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <div className="text-right">
                  <p className="font-medium text-green-800 dark:text-green-200">
                    واجهات API
                  </p>
                  <p className="text-sm text-green-600 dark:text-green-400">
                    متصلة ومستقرة
                  </p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950 rounded-lg">
                <div className="text-right">
                  <p className="font-medium text-yellow-800 dark:text-yellow-200">
                    تحديثات النظام
                  </p>
                  <p className="text-sm text-yellow-600 dark:text-yellow-400">
                    متوفرة للتحديث
                  </p>
                </div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Dashboard