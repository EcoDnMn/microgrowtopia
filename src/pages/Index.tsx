
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedArticles from "@/components/FeaturedArticles";
import Newsletter from "@/components/Newsletter";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturedArticles />
      <Newsletter />
    </div>
  );
};

export default Index;
