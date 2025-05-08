
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden mb-12">
      <div className="hero-gradient">
        <div className="container mx-auto px-4 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Welcome to <span className="text-brand-red">Ella Xpress</span>
              </h1>
              <p className="text-xl opacity-90 mb-8">
                Discover quality products across fashion, home, travel and more. 
                Fast shipping and excellent customer service guaranteed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-brand-red hover:bg-brand-red/90"
                >
                  <Link to="/category/female-hair">Shop Hair Products</Link>
                </Button>
                <Button 
                  size="lg"
                  variant="outline" 
                  className="bg-transparent border-white text-white hover:bg-white hover:text-brand-navy"
                >
                  <Link to="/category/fashion">Explore Fashion</Link>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Featured collection"
                  className="w-full h-[500px] object-cover object-center"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Summer Collection 2025
                  </h3>
                  <p className="text-gray-200 mb-4">
                    Fresh styles perfect for the season
                  </p>
                  <Button variant="secondary" className="bg-white text-brand-navy hover:bg-gray-100">
                    Shop Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
