
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ReviewCard from "@/components/products/ReviewCard";
import ReviewForm from "@/components/products/ReviewForm";
import ProductGrid from "@/components/products/ProductGrid";
import { getProductById, getProductsByCategory } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { MinusIcon, PlusIcon, ShoppingCart, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const ProductPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  
  // Get product by ID
  const product = getProductById(parseInt(productId || "0"));
  
  // Handle invalid product ID
  if (!product) {
    setTimeout(() => navigate("/"), 0);
    return null;
  }
  
  // Get related products
  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    addToCart(product, quantity);
  };
  
  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };
  
  // Generate stars for rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(product.rating);
    const hasHalfStar = product.rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <svg
          key="half"
          className="w-5 h-5 text-yellow-400 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          <path
            className="text-gray-300 fill-current"
            d="M12 17.27V5.6L9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
          />
        </svg>
      );
    }

    // Add empty stars to reach 5
    while (stars.length < 5) {
      stars.push(
        <svg
          key={`empty-${stars.length}`}
          className="w-5 h-5 text-gray-300 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    return stars;
  };
  
  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex text-sm">
            <li>
              <a href="/" className="text-gray-500 hover:text-brand-red">
                Home
              </a>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li>
              <a href={`/category/${product.categorySlug}`} className="text-gray-500 hover:text-brand-red">
                {product.category}
              </a>
            </li>
            <li className="mx-2 text-gray-400">/</li>
            <li className="text-gray-700 font-medium truncate max-w-[200px]">
              {product.name}
            </li>
          </ol>
        </nav>
        
        {/* Product Info Section */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Product Images */}
          <div className="bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center max-h-[600px]"
            />
          </div>
          
          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-brand-navy mb-2">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderStars()}
              </div>
              <span className="text-sm text-gray-600">
                ({product.reviewCount} reviews)
              </span>
            </div>
            
            <div className="mb-4">
              {product.discountPrice ? (
                <div className="flex items-center">
                  <span className="text-2xl font-bold text-brand-red mr-3">
                    ${product.discountPrice.toFixed(2)}
                  </span>
                  <span className="text-lg text-gray-500 line-through">
                    ${product.price.toFixed(2)}
                  </span>
                </div>
              ) : (
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            
            {/* Product badges */}
            <div className="flex space-x-2 mb-6">
              {product.isHot && (
                <Badge className="bg-orange-500">Hot</Badge>
              )}
              {product.isLimited && (
                <Badge className="bg-purple-600">Limited Edition</Badge>
              )}
              <Badge className="bg-green-500">In Stock</Badge>
            </div>
            
            <div className="border-t border-b py-4 my-6">
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              <div className="space-y-3">
                <h3 className="font-medium text-brand-navy">Features:</h3>
                <ul className="list-disc pl-5 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="text-gray-700">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Quantity Selector */}
            <div className="flex items-center mb-6">
              <span className="mr-4 font-medium">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <button
                  className="px-3 py-2 text-gray-600 hover:text-brand-red"
                  onClick={handleDecrement}
                >
                  <MinusIcon size={16} />
                </button>
                <span className="px-4 py-2 border-l border-r">{quantity}</span>
                <button
                  className="px-3 py-2 text-gray-600 hover:text-brand-red"
                  onClick={handleIncrement}
                >
                  <PlusIcon size={16} />
                </button>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={handleAddToCart}
                className="flex-1 bg-brand-navy hover:bg-brand-navy/90"
                size="lg"
              >
                <ShoppingCart className="mr-2" size={18} /> Add to Cart
              </Button>
              <Button 
                onClick={handleBuyNow}
                className="flex-1 bg-brand-red hover:bg-brand-red/90"
                size="lg"
              >
                Buy Now
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="w-12 h-12"
              >
                <Heart size={20} />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs */}
        <Tabs defaultValue="description" className="mb-16">
          <TabsList className="grid w-full grid-cols-3 border-b rounded-none">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews ({product.reviews.length})</TabsTrigger>
            <TabsTrigger value="shipping">Shipping & Returns</TabsTrigger>
          </TabsList>
          <TabsContent value="description" className="py-6">
            <div className="space-y-4">
              <p className="text-gray-700">{product.description}</p>
              <h3 className="font-medium text-lg">Features</h3>
              <ul className="list-disc pl-5 space-y-1">
                {product.features.map((feature, index) => (
                  <li key={index} className="text-gray-700">{feature}</li>
                ))}
              </ul>
            </div>
          </TabsContent>
          <TabsContent value="reviews" className="py-6">
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Customer Reviews</h3>
              <div className="space-y-4">
                {product.reviews.map((review) => (
                  <ReviewCard key={review.id} review={review} />
                ))}
              </div>
            </div>
            <ReviewForm />
          </TabsContent>
          <TabsContent value="shipping" className="py-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">Shipping Policy</h3>
                <p className="text-gray-700">
                  Orders are processed and shipped within 1-2 business days. 
                  Standard shipping takes 3-5 business days. Express shipping options 
                  are available at checkout for faster delivery.
                </p>
              </div>
              <div>
                <h3 className="font-medium text-lg mb-2">Return Policy</h3>
                <p className="text-gray-700">
                  We accept returns within 30 days of delivery. Items must be unused, 
                  unworn, and in original packaging. Return shipping costs are the 
                  customer's responsibility unless the item is defective or incorrect.
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Related Products */}
        <ProductGrid products={relatedProducts} title="You May Also Like" />
      </div>
    </Layout>
  );
};

export default ProductPage;
