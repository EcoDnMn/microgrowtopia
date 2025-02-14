
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center pt-16 bg-gradient-to-b from-sage-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <span className="inline-block px-4 py-1.5 bg-sage-100 text-sage-600 rounded-full text-sm font-medium font-inter">
            Grow with Confidence
          </span>
          <h1 className="text-4xl md:text-6xl font-playfair font-semibold text-charcoal-800 leading-tight">
            Master the Art of Growing Microgreens
          </h1>
          <p className="text-lg md:text-xl text-charcoal-600 font-inter max-w-2xl mx-auto">
            Discover expert tips, tools, and business insights for successful microgreens cultivation
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#growing-tips"
              className="px-8 py-3 bg-sage-500 text-white rounded-lg font-inter font-medium hover:bg-sage-600 transition-colors duration-200 flex items-center gap-2 group"
            >
              Start Learning
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-200" size={20} />
            </a>
            <a
              href="#tools-supplies"
              className="px-8 py-3 bg-white text-sage-500 rounded-lg font-inter font-medium border border-sage-200 hover:bg-sage-50 transition-colors duration-200"
            >
              View Tools & Supplies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
