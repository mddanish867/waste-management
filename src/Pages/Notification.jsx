import { useState } from 'react'
import { Bell, Trash2, Calendar, FileText, Settings, X } from 'lucide-react'



const mockNotifications = [
  { id: '1', type: 'pickup', message: 'Your waste pickup is scheduled for tomorrow at 9 AM.', date: '2023-05-20', read: false },
  { id: '2', type: 'service', message: 'New recycling guidelines are now available. Please check the app for details.', date: '2023-05-18', read: true },
  { id: '3', type: 'account', message: 'Your monthly statement is ready for review.', date: '2023-05-15', read: false },
  { id: '4', type: 'promo', message: 'Get 10% off on your next composting bin purchase!', date: '2023-05-12', read: true },
  { id: '5', type: 'pickup', message: 'Your last pickup was successfully completed. Rate our service!', date: '2023-05-10', read: false },
]

export default function NotificationPage() {
  const [notifications, setNotifications] = useState(mockNotifications)

  const markAsRead = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.map(notif =>
        notif.id === id ? { ...notif, read: true } : notif
      )
    )
  }

  const deleteNotification = (id) => {
    setNotifications(prevNotifications =>
      prevNotifications.filter(notif => notif.id !== id)
    )
  }

  const getIcon = (type) => {
    switch (type) {
      case 'pickup':
        return <Trash2 className="h-5 w-5 text-blue-500" />
      case 'service':
        return <Settings className="h-5 w-5 text-green-500" />
      case 'account':
        return <FileText className="h-5 w-5 text-yellow-500" />
      case 'promo':
        return <Bell className="h-5 w-5 text-purple-500" />
      default:
        return <Bell className="h-5 w-5 text-gray-500" />
    }
  }

  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Notifications</h1>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {notifications.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No notifications at this time.
            </div>
          ) : (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className={`flex items-start p-4 border-b border-gray-200 ${
                  notification.read ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="flex-shrink-0 mr-4">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-grow">
                  <p className={`text-sm ${notification.read ? 'text-gray-600' : 'text-gray-800 font-semibold'}`}>
                    {notification.message}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    <Calendar className="h-3 w-3 inline-block mr-1" />
                    {notification.date}
                  </p>
                </div>
                <div className="flex-shrink-0 ml-4">
                  {!notification.read && (
                    <button
                      onClick={() => markAsRead(notification.id)}
                      className="text-sm text-green-500 hover:text-green-600 mr-2"
                    >
                      Mark as read
                    </button>
                  )}
                  <button
                    onClick={() => deleteNotification(notification.id)}
                    className="text-sm text-red-500 hover:text-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}