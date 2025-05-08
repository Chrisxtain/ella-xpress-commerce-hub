
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import ProductGrid from "@/components/products/ProductGrid";
import CategoryCard from "@/components/products/CategoryCard";
import { Button } from "@/components/ui/button";
import { 
  getFeaturedProducts, 
  getHotProducts, 
  getLimitedProducts,
  categories
} from "@/data/products";
import { Link } from "react-router-dom";

const HomePage = () => {
  const featuredProducts = getFeaturedProducts();
  const hotProducts = getHotProducts();
  const limitedProducts = getLimitedProducts();
  
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection />
      
      <div className="container mx-auto px-4 py-8">
        {/* Categories Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-brand-navy">Shop by Category</h2>
            <Link to="/" className="text-brand-red hover:text-brand-red/80">
              View All Categories
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
        
        {/* Featured Products */}
        <ProductGrid products={featuredProducts} title="Featured Products" />
        
        {/* Hot Products */}
        <ProductGrid products={hotProducts} title="Hot Right Now" />
        
        {/* Limited Edition */}
        <ProductGrid products={limitedProducts} title="Limited Edition" />
        
        {/* Mid-page Banner */}
        <div className="bg-brand-light rounded-lg overflow-hidden my-16">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <span className="inline-block px-3 py-1 bg-brand-red/10 text-brand-red text-sm font-medium rounded-full mb-4">
                Special Offer
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
                Get 20% Off Your First Purchase
              </h2>
              <p className="text-gray-700 mb-6">
                Sign up for our newsletter and receive a special discount code for your first order. Limited time offer.
              </p>
              <Button className="bg-brand-navy hover:bg-brand-navy/90">
                Subscribe Now
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3BwaW5nfGVufDB8fDB8fHww" 
                alt="Special Offer" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
