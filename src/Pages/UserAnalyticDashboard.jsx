import React, { useState, useEffect } from 'react'
import { Bar, Pie } from 'react-chartjs-2'
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement,
  PointElement,
  LineElement
} from 'chart.js'
import { Trash2, DollarSign, TrendingUp, BarChart2 } from 'lucide-react'

ChartJS.register(
  CategoryScale, 
  LinearScale, 
  BarElement, 
  Title, 
  Tooltip, 
  Legend, 
  ArcElement,
  PointElement,
  LineElement
)

const fetchData = async (endpoint) => {
  // In a real application, this would be an API call
  // For this example, we'll simulate an API response
  await new Promise(resolve => setTimeout(resolve, 500)) // Simulate network delay
  
  switch (endpoint) {
    case 'wasteData':
      return {
        labels: ['General', 'Recyclable', 'Organic', 'Electronic'],
        data: [30, 40, 20, 10],
      }
    case 'weeklyReport':
      return {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: [12, 19, 3, 5, 2, 3, 10],
      }
    case 'profitData':
      return {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        data: [50, 75, 60, 90],
      }
    default:
      return {}
  }
}

export default function UserAnalyticDashboard() {
  const [timeRange, setTimeRange] = useState('week')
  const [wasteData, setWasteData] = useState({ labels: [], data: [] })
  const [weeklyReportData, setWeeklyReportData] = useState({ labels: [], data: [] })
  const [profitData, setProfitData] = useState({ labels: [], data: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const [waste, weekly, profit] = await Promise.all([
        fetchData('wasteData'),
        fetchData('weeklyReport'),
        fetchData('profitData'),
      ])
      setWasteData(waste)
      setWeeklyReportData(weekly)
      setProfitData(profit)
      setLoading(false)
    }
    loadData()
  }, [timeRange])

  const wasteChartData = {
    labels: wasteData.labels,
    datasets: [
      {
        data: wasteData.data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
      }
    ]
  }

  const weeklyReportChartData = {
    labels: weeklyReportData.labels,
    datasets: [
      {
        label: 'Waste Collected (kg)',
        data: weeklyReportData.data,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  }

  const profitChartData = {
    labels: profitData.labels,
    datasets: [
      {
        label: 'Profit Earned ($)',
        data: profitData.data,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Day of Week'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount'
        }
      }
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Your Analytics Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Total Waste</h3>
              <Trash2 className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-800">237 kg</p>
            <p className="text-sm text-gray-500 mt-2">+5% from last month</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Recycling Rate</h3>
              <TrendingUp className="h-6 w-6 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-800">68%</p>
            <p className="text-sm text-gray-500 mt-2">+2% from last month</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Carbon Offset</h3>
              <BarChart2 className="h-6 w-6 text-yellow-500" />
            </div>
            <p className="text-3xl font-bold text-gray-800">42 kg</p>
            <p className="text-sm text-gray-500 mt-2">CO2 equivalent</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-700">Profit Earned</h3>
              <DollarSign className="h-6 w-6 text-green-500" />
            </div>
            <p className="text-3xl font-bold text-gray-800">$275</p>
            <p className="text-sm text-gray-500 mt-2">This month</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Waste Composition</h3>
            <Pie data={wasteChartData} />
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Weekly Waste Report</h3>
            <Bar options={chartOptions} data={weeklyReportChartData} />
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">Profit Trend</h3>
          <div className="mb-4">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="year">This Year</option>
            </select>
          </div>
          <Bar options={chartOptions} data={profitChartData} />
        </div>
      </div>
    </div>
  )
}