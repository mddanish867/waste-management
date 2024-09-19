import { useState } from 'react'
import { Calendar, Trash2, FileText, ChevronDown, ChevronUp } from 'lucide-react'



const mockPickupHistory = [
  { id: '1', date: '2023-05-15', wasteTypes: ['General', 'Recyclable'], weight: 15.5, status: 'completed' },
  { id: '2', date: '2023-05-08', wasteTypes: ['Organic'], weight: 7.2, status: 'completed' },
  { id: '3', date: '2023-05-01', wasteTypes: ['General', 'Electronic'], weight: 12.8, status: 'completed' },
  { id: '4', date: '2023-04-24', wasteTypes: ['Recyclable'], weight: 9.3, status: 'missed' },
  { id: '5', date: '2023-04-17', wasteTypes: ['General', 'Organic'], weight: 18.1, status: 'completed' },
]

export default function PickupHistory() {
  const [expandedRecords, setExpandedRecords] = useState([])

  const toggleRecordExpansion = (id) => {
    setExpandedRecords(prev =>
      prev.includes(id) ? prev.filter(recordId => recordId !== id) : [...prev, id]
    )
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'text-green-500'
      case 'cancelled':
        return 'text-red-500'
      case 'missed':
        return 'text-yellow-500'
      default:
        return 'text-gray-500'
    }
  }

  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Pickup History</h1>
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          {mockPickupHistory.map((record) => (
            <div key={record.id} className="border-b border-gray-200 py-4 last:border-b-0">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleRecordExpansion(record.id)}
              >
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-green-500 mr-2" />
                  <span className="font-semibold">{record.date}</span>
                </div>
                <div className="flex items-center">
                  <span className={`font-medium ${getStatusColor(record.status)} mr-2`}>
                    {record.status.charAt(0).toUpperCase() + record.status.slice(1)}
                  </span>
                  {expandedRecords.includes(record.id) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </div>
              {expandedRecords.includes(record.id) && (
                <div className="mt-4 pl-7">
                  <div className="flex items-center mb-2">
                    <Trash2 className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Waste Types: {record.wasteTypes.join(', ')}</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <FileText className="h-5 w-5 text-gray-500 mr-2" />
                    <span className="text-gray-700">Total Weight: {record.weight} kg</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}