
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const blogPosts = [
  {
    title: "10 Most Profitable Microgreens to Grow",
    excerpt: "Discover which microgreen varieties offer the best return on investment and are in high demand among customers.",
    category: "Business",
    date: "March 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  },
  {
    title: "Optimizing Your Growing Space",
    excerpt: "Learn how to maximize your growing area efficiency and increase yield through smart space management.",
    category: "Growing Tips",
    date: "March 12, 2024",
    imageUrl: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
  },
  {
    title: "Sustainable Packaging Solutions",
    excerpt: "Explore eco-friendly packaging options that keep your microgreens fresh while appealing to environmentally conscious customers.",
    category: "Business",
    date: "March 10, 2024",
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
  },
];

const Blog = () => {
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
              Microgreens Blog
            </h1>
            <p className="text-lg text-charcoal-600 mb-12">
              Stay updated with the latest insights, tips, and trends in the world of microgreens cultivation and business.
            </p>
            
            <div className="space-y-12">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full md:w-64 object-cover"
                        src={post.imageUrl}
                        alt={post.title}
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 text-sm text-charcoal-500 mb-3">
                        <span className="inline-block px-3 py-1 bg-sage-50 text-sage-600 rounded-full font-medium">
                          {post.category}
                        </span>
                        <span>{post.date}</span>
                      </div>
                      <h2 className="text-2xl font-playfair font-semibold text-charcoal-800 mb-3">
                        {post.title}
                      </h2>
                      <p className="text-charcoal-600 mb-4">
                        {post.excerpt}
                      </p>
                      <a
                        href="#"
                        className="text-sage-500 hover:text-sage-600 font-medium"
                      >
                        Read More →
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
