
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import ProductGrid from "@/components/products/ProductGrid";
import { getProductsByCategory, categories } from "@/data/products";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const navigate = useNavigate();
  
  // Get category by slug
  const category = categories.find(c => c.slug === categorySlug);
  
  // Handle invalid category
  if (!category) {
    setTimeout(() => navigate("/"), 0);
    return null;
  }
  
  const products = getProductsByCategory(categorySlug || "");
  
  // Sorting and filtering
  const [sortBy, setSortBy] = useState("name-asc");
  
  // Apply sorting
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "name-asc":
        return a.name.localeCompare(b.name);
      case "name-desc":
        return b.name.localeCompare(a.name);
      case "price-asc":
        const aPrice = a.discountPrice || a.price;
        const bPrice = b.discountPrice || b.price;
        return aPrice - bPrice;
      case "price-desc":
        const aPrice2 = a.discountPrice || a.price;
        const bPrice2 = b.discountPrice || b.price;
        return bPrice2 - aPrice2;
      case "rating-desc":
        return b.rating - a.rating;
      default:
        return 0;
    }
  });

  return (
    <Layout>
      {/* Hero Banner */}
      <div 
        className="relative h-64 bg-cover bg-center bg-no-repeat mb-8"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">{category.name}</h1>
            <p className="text-gray-200">{category.description}</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        {/* Filtering and Sorting Controls */}
        <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
          <div className="flex flex-wrap items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Showing {products.length} products
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-medium">Sort by:</span>
              <Select 
                value={sortBy} 
                onValueChange={(value) => setSortBy(value)}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name-asc">Name (A-Z)</SelectItem>
                  <SelectItem value="name-desc">Name (Z-A)</SelectItem>
                  <SelectItem value="price-asc">Price (Low to High)</SelectItem>
                  <SelectItem value="price-desc">Price (High to Low)</SelectItem>
                  <SelectItem value="rating-desc">Highest Rated</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        {products.length > 0 ? (
          <ProductGrid products={sortedProducts} />
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 mb-4">No products found</h3>
            <p className="text-gray-500 mb-8">We couldn't find any products in this category.</p>
            <Button onClick={() => navigate("/")}>
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CategoryPage;
