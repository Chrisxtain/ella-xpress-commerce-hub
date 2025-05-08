
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Summer Collection 2025",
    description: "Fresh styles perfect for the season",
    link: "/category/fashion"
  },
  {
    image: "https://images.unsplash.com/photo-1522338140262-f46f5913618a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMGRyeWVyfGVufDB8fDB8fHww",
    title: "Hair Styling Essentials",
    description: "Professional tools for salon-quality results",
    link: "/category/female-hair"
  },
  {
    image: "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dHJhdmVsJTIwZ2VhcnxlbnwwfHwwfHx8MA%3D%3D",
    title: "Travel Gear Collection",
    description: "Everything you need for your next adventure",
    link: "/category/travel"
  }
];

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden mb-12">
      <div className="hero-gradient">
        <div className="container mx-auto px-4 py-16 md:py-24">
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
            <div className="hidden lg:block">
              <Carousel className="w-full max-w-[600px] mx-auto">
                <CarouselContent>
                  {slides.map((slide, index) => (
                    <CarouselItem key={index}>
                      <div className="relative rounded-lg overflow-hidden shadow-xl">
                        <img
                          src={slide.image}
                          alt={slide.title}
                          className="w-full h-[500px] object-cover object-center"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                          <h3 className="text-xl font-bold text-white mb-2">
                            {slide.title}
                          </h3>
                          <p className="text-gray-200 mb-4">
                            {slide.description}
                          </p>
                          <Button variant="secondary" className="bg-white text-brand-navy hover:bg-gray-100">
                            <Link to={slide.link}>Shop Now</Link>
                          </Button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
                <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
