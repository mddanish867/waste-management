import { useState } from 'react'
import { Link } from "react-router-dom";
import { RecycleIcon, Mail } from 'lucide-react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle forgot password logic here
    console.log('Forgot password attempt', { email })
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <div className="flex justify-center mb-6">
        <Link to="/">
            <RecycleIcon className="h-12 w-12 text-green-500" />
            </Link>
        </div>
        <h2 className="text-2xl font-bold text-center text-green-700 mb-6">Forgot Password</h2>
        <p className="text-gray-600 text-center mb-6">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Mail className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Send Reset Link
          </button>
        </form>
        <div className="mt-6 text-center">
          <Link to="/login" className="text-sm text-green-600 hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
    </div>
  )
}