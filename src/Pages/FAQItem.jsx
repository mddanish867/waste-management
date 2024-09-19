import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'


const faqData = [
  {
    question: "How does the waste pickup service work?",
    answer: "Our waste pickup service operates on a schedule that you can customize through our app. Simply set your preferred pickup days and times, and our team will arrive to collect your sorted waste. You'll receive notifications before each pickup to ensure you're prepared."
  },
  {
    question: "What types of waste do you collect?",
    answer: "We collect various types of waste, including general household waste, recyclables (paper, plastic, glass, metal), organic waste for composting, and electronic waste. Each category should be sorted separately for efficient processing."
  },
  {
    question: "How can I earn rewards through your program?",
    answer: "You can earn rewards by consistently recycling, reducing your waste output, and participating in community cleanup events. Points are awarded based on the weight and type of recyclables you contribute, which can be redeemed for eco-friendly products or discounts on our services."
  },
  {
    question: "What measures do you take to ensure environmental safety?",
    answer: "We adhere to strict environmental guidelines in all our operations. This includes using eco-friendly vehicles for waste collection, implementing advanced recycling technologies, and partnering with certified facilities for proper waste disposal and recycling."
  },
  {
    question: "How can I track my waste management progress?",
    answer: "Our app provides a detailed dashboard where you can track your waste output, recycling rates, and environmental impact over time. You'll see graphs and statistics that help you understand your progress and areas for improvement."
  }
]

export default function FAQ() {
  const [openItems, setOpenItems] = useState([])

  const toggleItem = (index) => {
    setOpenItems(prevOpenItems =>
      prevOpenItems.includes(index)
        ? prevOpenItems.filter(item => item !== index)
        : [...prevOpenItems, index]
    )
  }

  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-green-700 text-center mb-8">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={index} className="mb-4">
              <button
                className="flex justify-between items-center w-full bg-white p-4 rounded-lg shadow-md focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <span className="text-lg font-semibold text-green-600">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="h-5 w-5 text-green-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-green-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="bg-white mt-2 p-4 rounded-lg shadow-md">
                  <p className="text-gray-700">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}