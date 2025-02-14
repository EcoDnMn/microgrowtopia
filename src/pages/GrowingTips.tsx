
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const tips = [
  {
    title: "Seed Selection",
    description: "Choose high-quality, organic seeds specifically meant for microgreens. Popular varieties include radish, sunflower, pea shoots, and arugula.",
    imageUrl: "https://images.unsplash.com/photo-1582354050092-040d4861d8ac",
  },
  {
    title: "Growing Medium",
    description: "Use sterile, fine-textured potting soil or coconut coir. The medium should retain moisture while providing good drainage.",
    imageUrl: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e",
  },
  {
    title: "Light Requirements",
    description: "Provide 12-16 hours of light daily. LED grow lights work well, placed 4-6 inches above the growing trays.",
    imageUrl: "https://images.unsplash.com/photo-1576014131795-d526ba5004b4",
  },
];

const GrowingTips = () => {
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
              Essential Growing Tips
            </h1>
            <p className="text-lg text-charcoal-600 mb-12">
              Master the art of growing microgreens with our comprehensive guide. Follow these proven techniques for successful cultivation.
            </p>
            
            <div className="space-y-12">
              {tips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full md:w-64 object-cover"
                        src={tip.imageUrl}
                        alt={tip.title}
                      />
                    </div>
                    <div className="p-8">
                      <h2 className="text-2xl font-playfair font-semibold text-charcoal-800 mb-4">
                        {tip.title}
                      </h2>
                      <p className="text-charcoal-600">
                        {tip.description}
                      </p>
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

export default GrowingTips;
