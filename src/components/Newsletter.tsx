
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Success!",
      description: "Thank you for subscribing to our newsletter.",
    });
    setEmail("");
  };

  return (
    <section className="py-24 bg-sage-50">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sage-500 font-inter font-medium">Newsletter</span>
          <h2 className="mt-2 text-3xl md:text-4xl font-playfair font-semibold text-charcoal-800 mb-4">
            Stay Updated with Microgreens Insights
          </h2>
          <p className="text-charcoal-600 mb-8">
            Subscribe to our newsletter for the latest growing tips, business strategies, and industry updates.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="px-6 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-sage-500 flex-grow max-w-md"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 bg-sage-500 text-white rounded-lg font-inter font-medium hover:bg-sage-600 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
