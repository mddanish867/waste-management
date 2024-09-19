import { Check } from 'lucide-react'



const pricingPlans = [
  {
    name: "Basic",
    price: 9.99,
    features: [
      "Weekly waste collection",
      "Recycling bin provided",
      "Basic waste sorting guide",
      "Email support"
    ]
  },
  {
    name: "Standard",
    price: 19.99,
    features: [
      "Twice-weekly waste collection",
      "Recycling and compost bins provided",
      "Advanced waste sorting guide",
      "Mobile app access",
      "Phone and email support"
    ],
    recommended: true
  },
  {
    name: "Premium",
    price: 29.99,
    features: [
      "Daily waste collection",
      "All bins provided (including e-waste)",
      "Personalized waste management plan",
      "Priority mobile app features",
      "24/7 premium support",
      "Monthly waste audit and report"
    ]
  }
]

export default function Pricing() {
  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Our Pricing Plans</h1>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg overflow-hidden ${
                plan.recommended ? 'ring-2 ring-green-500' : ''
              }`}
            >
              {plan.recommended && (
                <div className="bg-green-500 text-white text-center py-2 text-sm font-semibold">
                  Recommended
                </div>
              )}
              <div className="p-6">
                <h2 className="text-2xl font-bold text-green-600 mb-4">{plan.name}</h2>
                <div className="text-4xl font-bold text-gray-700 mb-6">
                  ${plan.price}
                  <span className="text-base font-normal text-gray-500">/month</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-2 px-4 rounded-md ${
                    plan.recommended
                      ? 'bg-green-500 text-white hover:bg-green-600'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50`}
                >
                  Choose Plan
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}