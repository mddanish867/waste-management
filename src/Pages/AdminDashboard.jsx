import React, { useState, useEffect } from 'react'
import { Users, Truck, BarChart2, Settings, Search, Bell, ChevronDown } from 'lucide-react'
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
    case 'overviewData':
      return {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        totalWaste: [65, 59, 80, 81, 56, 55],
        recycledWaste: [28, 48, 40, 19, 86, 27],
      }
    case 'wasteComposition':
      return {
        labels: ['General', 'Recyclable', 'Organic', 'Electronic'],
        data: [300, 200, 150, 50],
      }
    case 'users':
      return [
        { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'active' },
      ]
    case 'collections':
      return [
        { id: 1, date: '2023-05-20', location: '123 Green St, Eco City', wasteType: 'Recyclable', amount: '50 kg', status: 'completed' },
        { id: 2, date: '2023-05-21', location: '456 Blue Ave, Eco City', wasteType: 'General', amount: '30 kg', status: 'pending' },
        { id: 3, date: '2023-05-22', location: '789 Red Rd, Eco City', wasteType: 'Organic', amount: '40 kg', status: 'in-progress' },
      ]
    default:
      return {}
  }
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const [overviewData, setOverviewData] = useState({ labels: [], totalWaste: [], recycledWaste: [] })
  const [wasteComposition, setWasteComposition] = useState({ labels: [], data: [] })
  const [users, setUsers] = useState([])
  const [collections, setCollections] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      setLoading(true)
      const [overview, composition, usersData, collectionsData] = await Promise.all([
        fetchData('overviewData'),
        fetchData('wasteComposition'),
        fetchData('users'),
        fetchData('collections'),
      ])
      setOverviewData(overview)
      setWasteComposition(composition)
      setUsers(usersData)
      setCollections(collectionsData)
      setLoading(false)
    }
    loadData()
  }, [])

  const overviewChartData = {
    labels: overviewData.labels,
    datasets: [
      {
        label: 'Total Waste Collected (tons)',
        data: overviewData.totalWaste,
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Recycled Waste (tons)',
        data: overviewData.recycledWaste,
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      }
    ]
  }

  const wasteCompositionChartData = {
    labels: wasteComposition.labels,
    datasets: [
      {
        data: wasteComposition.data,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'],
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
        text: 'Waste Collection Overview',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Amount (tons)'
        }
      }
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-green-600">EcoWaste Admin</h2>
        </div>
        <nav className="mt-4">
          <a
            href="#"
            className={`flex items-center py-2 px-4 ${activeTab === 'overview' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('overview')}
          >
            <BarChart2 className="h-5 w-5 mr-2" />
            Overview
          </a>
          <a
            href="#"
            className={`flex items-center py-2 px-4 ${activeTab === 'users' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('users')}
          >
            <Users className="h-5 w-5 mr-2" />
            Users
          </a>
          <a
            href="#"
            className={`flex items-center py-2 px-4 ${activeTab === 'collections' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('collections')}
          >
            <Truck className="h-5 w-5 mr-2" />
            Collections
          </a>
          <a
            href="#"
            className={`flex items-center py-2 px-4 ${activeTab === 'settings' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'}`}
            onClick={() => setActiveTab('settings')}
          >
            <Settings className="h-5 w-5 mr-2" />
            Settings
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex items-center">
              <div className="relative mr-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-100 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <Search className="h-5 w-5 text-gray-400 absolute left-3 top-2.5" />
              </div>
              <button className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
                <Bell className="h-5 w-5" />
              </button>
              <div className="ml-4 flex items-center">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Admin"
                />
                <span className="ml-2 text-sm font-medium text-gray-700">John Doe</span>
                <ChevronDown className="h-4 w-4 ml-1 text-gray-400" />
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {activeTab === 'overview' && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-700">Total Users</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">12,345</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-700">Active Collections</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">1,234</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-700">Total Waste Collected</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">5,678 tons</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-lg font-semibold text-gray-700">Recycling Rate</h3>
                  <p className="text-3xl font-bold text-gray-800 mt-2">68%</p>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Waste Collection Trend</h3>
                  <Bar options={chartOptions} data={overviewChartData} />
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">Waste Composition</h3>
                  <Pie data={wasteCompositionChartData} />
                </div>
              </div>
            </div>
          )}
          {activeTab === 'users' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">User Management</h3>
              </div>
              <div className="border-t border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {users.map((user) => (
                      <tr key={user.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            user.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                          }`}>
                            {user.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <a href="#" className="text-indigo-600 hover:text-indigo-900">Edit</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 'collections' && (
            <div className="bg-white shadow rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Waste Collections</h3>
              </div>
              <div className="border-t border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Waste Type</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {collections.map((collection) => (
                      <tr key={collection.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{collection.date}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{collection.location}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{collection.wasteType}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{collection.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                            collection.status === 'completed' ? 'bg-green-100 text-green-800' :
                            collection.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {collection.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 'settings' && (
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">System Settings</h3>
              <div className="space-y-6">
                <div>
                  <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">Company Name</label>
                  <input type="text" name="company-name" id="company-name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="EcoWaste Solutions" />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">Contact Email</label>
                  <input type="email" name="contact-email" id="contact-email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm" placeholder="contact@ecowaste.com" />
                </div>
                <div>
                  <label htmlFor="timezone" className="block text-sm font-medium text-gray-700">Timezone</label>
                  <select id="timezone" name="timezone" className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md">
                    <option>Pacific Standard Time</option>
                    <option>Eastern Standard Time</option>
                    <option>Central European Time</option>
                  </select>
                </div>
                <div className="flex items-center">
                  <input id="notifications" name="notifications" type="checkbox" className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded" />
                  <label htmlFor="notifications" className="ml-2 block text-sm text-gray-900">Enable email notifications</label>
                </div>
                <div>
                  <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}