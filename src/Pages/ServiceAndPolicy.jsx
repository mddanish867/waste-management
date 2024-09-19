import { Truck, Recycle, FileText, ShieldCheck } from 'lucide-react'

export default function ServiceAndPolicy() {
  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Our Services and Policies</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
              <Truck className="h-6 w-6 mr-2" />
              Our Services
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Recycle className="h-6 w-6 text-green-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-700">Waste Collection</h3>
                  <p className="text-gray-600">Regular collection of household and commercial waste, with options for daily, weekly, or custom schedules.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Recycle className="h-6 w-6 text-green-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-700">Recycling Programs</h3>
                  <p className="text-gray-600">Comprehensive recycling services for paper, plastic, glass, and metal, with educational resources on proper sorting.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Recycle className="h-6 w-6 text-green-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-700">Composting Solutions</h3>
                  <p className="text-gray-600">Organic waste collection and composting services, with options for home composting support.</p>
                </div>
              </li>
              <li className="flex items-start">
                <Recycle className="h-6 w-6 text-green-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-700">E-Waste Management</h3>
                  <p className="text-gray-600">Safe collection and disposal of electronic waste, ensuring proper recycling and data destruction.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-green-600 mb-4 flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              Our Policies
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-green-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-700">Environmental Compliance</h3>
                  <p className="text-gray-600">We adhere to all local and national environmental regulations, ensuring our operations are eco-friendly and sustainable.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-green-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-700">Customer Privacy</h3>
                  <p className="text-gray-600">Your personal information is protected with state-of-the-art security measures. We never share or sell your data.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-green-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-700">Fair Pricing</h3>
                  <p className="text-gray-600">Our pricing is transparent and competitive. We offer flexible plans to suit different needs and budgets.</p>
                </div>
              </li>
              <li className="flex items-start">
                <ShieldCheck className="h-6 w-6 text-green-500 mr-2 mt-1" />
                <div>
                  <h3 className="font-semibold text-gray-700">Community Engagement</h3>
                  <p className="text-gray-600">We actively participate in and support local environmental initiatives and education programs.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            For more detailed information about our services and policies, please refer to our comprehensive documentation.
          </p>
          <button className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300 ease-in-out">
            View Full Documentation
          </button>
        </div>
      </div>
    </div>
  )
}