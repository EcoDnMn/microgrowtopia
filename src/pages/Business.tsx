
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const businessTopics = [
  {
    title: "Market Research",
    description: "Learn how to identify your target market, analyze competition, and find your unique selling proposition in the microgreens industry.",
    icon: "📊",
  },
  {
    title: "Pricing Strategy",
    description: "Develop an effective pricing strategy that ensures profitability while remaining competitive in your local market.",
    icon: "💰",
  },
  {
    title: "Sales Channels",
    description: "Explore various sales channels including farmers markets, restaurants, local grocers, and direct-to-consumer options.",
    icon: "🏪",
  },
  {
    title: "Marketing Plan",
    description: "Create a comprehensive marketing strategy using social media, content marketing, and local networking.",
    icon: "📱",
  },
];

const Business = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-charcoal-800 mb-6">
              Microgreens Business Guide
            </h1>
            <p className="text-lg text-charcoal-600 mb-12">
              Transform your passion for microgreens into a successful business venture. Explore our comprehensive guide to starting and growing your microgreens business.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              {businessTopics.map((topic, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="text-4xl mb-4">{topic.icon}</div>
                  <h2 className="text-xl font-playfair font-semibold text-charcoal-800 mb-3">
                    {topic.title}
                  </h2>
                  <p className="text-charcoal-600">
                    {topic.description}
                  </p>
                  <a
                    href="#"
                    className="inline-block mt-4 text-sage-500 hover:text-sage-600 font-medium"
                  >
                    Read More →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
