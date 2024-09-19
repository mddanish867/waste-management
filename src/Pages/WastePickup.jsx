import { useState } from 'react'
import { Calendar, Clock, Trash2 } from 'lucide-react'

//type WasteType = 'general' | 'recyclable' | 'organic' | 'electronic'

export default function WastePickup() {
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [wasteTypes, setWasteTypes] = useState([])
  const [notes, setNotes] = useState('')

  const handleWasteTypeToggle = (type) => {
    setWasteTypes(prevTypes =>
      prevTypes.includes(type)
        ? prevTypes.filter(t => t !== type)
        : [...prevTypes, type]
    )
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle pickup scheduling logic here
    console.log('Pickup scheduled', { date, time, wasteTypes, notes })
  }

  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Schedule Waste Pickup</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">Pickup Date</label>
              <div className="relative">
                <input
                  type="date"
                  id="date"
                  className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="time" className="block text-gray-700 text-sm font-bold mb-2">Preferred Time</label>
              <div className="relative">
                <input
                  type="time"
                  id="time"
                  className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                />
                <Clock className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Waste Types</label>
              <div className="grid grid-cols-2 gap-4">
                {(['general', 'recyclable', 'organic', 'electronic'] ).map((type) => (
                  <button
                    key={type}
                    type="button"
                    className={`flex items-center justify-center p-3 rounded-md border ${
                      wasteTypes.includes(type)
                        ? 'bg-green-500 text-white border-green-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'
                    }`}
                    onClick={() => handleWasteTypeToggle(type)}
                  >
                    <Trash2 className="h-5 w-5 mr-2" />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="notes" className="block text-gray-700 text-sm font-bold mb-2">Additional Notes</label>
              <textarea
                id="notes"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Any special instructions or details..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              Schedule Pickup
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}