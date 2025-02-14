
import { ArrowUpRight } from "lucide-react";

const articles = [
  {
    title: "Essential Guide to Growing Microgreens",
    category: "Growing Tips",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    description: "Learn the fundamentals of microgreens cultivation, from seed selection to harvest.",
  },
  {
    title: "Top 10 Tools for Microgreens Business",
    category: "Tools & Supplies",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    description: "Discover the essential tools and equipment needed for your microgreens business.",
  },
  {
    title: "Starting Your Microgreens Business",
    category: "Business",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    description: "A comprehensive guide to launching your successful microgreens business.",
  },
];

const FeaturedArticles = () => {
  return (
    <section className="py-24 bg-white" id="blog">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sage-500 font-inter font-medium">Featured Articles</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-playfair font-semibold text-charcoal-800">
              Latest from Our Blog
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-sage-50 text-sage-600 rounded-full text-sm font-medium mb-4">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-playfair font-semibold text-charcoal-800 mb-2">
                    {article.title}
                  </h3>
                  <p className="text-charcoal-600 mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-sage-500 font-medium hover:text-sage-600 transition-colors duration-200"
                  >
                    Read More
                    <ArrowUpRight size={18} className="ml-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticles;
