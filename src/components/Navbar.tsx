
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="/" className="font-playfair text-xl font-semibold text-charcoal-800">
            MicroGreens Guide
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {["Growing Tips", "Tools & Supplies", "Business", "Blog"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" & ", "-").replace(" ", "-")}`}
                className="text-charcoal-600 hover:text-sage-500 transition-colors duration-200 font-inter"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-charcoal-800"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-100 animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              {["Growing Tips", "Tools & Supplies", "Business", "Blog"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" & ", "-").replace(" ", "-")}`}
                  className="block py-2 text-charcoal-600 hover:text-sage-500 transition-colors duration-200 font-inter"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
