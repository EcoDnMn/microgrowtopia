
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const tools = [
  {
    title: "Growing Trays",
    description: "High-quality 10x20 inch growing trays with drainage holes for optimal water management.",
    price: "$8.99",
    imageUrl: "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9",
  },
  {
    title: "LED Grow Lights",
    description: "Full-spectrum LED lights specifically designed for microgreens growth cycles.",
    price: "$89.99",
    imageUrl: "https://images.unsplash.com/photo-1576014131795-d526ba5004b4",
  },
  {
    title: "Premium Soil Mix",
    description: "Organic potting mix formulated for microgreens, ensuring optimal growth and nutrition.",
    price: "$19.99",
    imageUrl: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e",
  },
];

const ToolsSupplies = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <Link to="/" className="inline-flex items-center text-sage-600 hover:text-sage-700 mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-playfair font-semibold text-charcoal-800 mb-6">
              Tools & Supplies
            </h1>
            <p className="text-lg text-charcoal-600 mb-12">
              Quality equipment and supplies are essential for successful microgreens cultivation. Here's our curated selection of recommended products.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tools.map((tool, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    className="h-48 w-full object-cover"
                    src={tool.imageUrl}
                    alt={tool.title}
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-playfair font-semibold text-charcoal-800 mb-2">
                      {tool.title}
                    </h2>
                    <p className="text-charcoal-600 mb-4">
                      {tool.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-medium text-sage-600">
                        {tool.price}
                      </span>
                      <a
                        href="#"
                        className="inline-flex items-center text-sage-500 hover:text-sage-600 font-medium"
                      >
                        Learn More
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsSupplies;
