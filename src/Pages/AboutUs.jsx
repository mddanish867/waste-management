import { RecycleIcon, Leaf, Users, Globe } from 'lucide-react'

export default function AboutUs() {
  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-6">
            At EcoWaste Solutions, we are committed to revolutionizing waste management through innovative, 
            sustainable practices. Our goal is to create a cleaner, greener future by empowering individuals 
            and communities to take control of their waste management.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <RecycleIcon className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-2">Efficient Recycling</h3>
              <p className="text-gray-600">Maximizing resource recovery through state-of-the-art recycling processes.</p>
            </div>
            <div className="text-center">
              <Leaf className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-2">Eco-Friendly Solutions</h3>
              <p className="text-gray-600">Implementing environmentally conscious waste management strategies.</p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-600 mb-2">Community Engagement</h3>
              <p className="text-gray-600">Educating and involving communities in sustainable waste practices.</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">Our Impact</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">Global Reach</h3>
              <p className="text-gray-700 mb-4">
                We've expanded our operations to 20+ countries, making a significant impact on global waste reduction.
              </p>
              <Globe className="h-16 w-16 text-green-500" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-green-600 mb-2">By the Numbers</h3>
              <ul className="list-disc list-inside text-gray-700">
                <li>Over 1 million tons of waste recycled annually</li>
                <li>50% reduction in landfill waste for partner communities</li>
                <li>100,000+ active users on our waste management platform</li>
                <li>30% average increase in recycling rates for our clients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}