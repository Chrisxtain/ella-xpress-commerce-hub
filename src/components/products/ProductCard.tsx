
import { Link } from "react-router-dom";
import { ShoppingCart, Heart } from "lucide-react";
import { Product } from "@/data/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { id, name, price, discountPrice, image, rating, isHot, isLimited } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  // Calculate discount percentage
  const discountPercentage = discountPrice
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  // Generate stars for rating
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <svg
          key={`full-${i}`}
          className="w-4 h-4 text-yellow-400 fill-current"
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
          className="w-4 h-4 text-yellow-400 fill-current"
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
          className="w-4 h-4 text-gray-300 fill-current"
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }

    return stars;
  };

  return (
    <Link to={`/products/${id}`} className="product-card group overflow-hidden">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative overflow-hidden h-64 rounded-t-lg">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {discountPrice && (
              <Badge className="bg-brand-red">-{discountPercentage}%</Badge>
            )}
            {isHot && (
              <Badge className="bg-orange-500">Hot</Badge>
            )}
            {isLimited && (
              <Badge className="bg-purple-600">Limited</Badge>
            )}
          </div>
          
          {/* Action buttons */}
          <div className="product-card-actions absolute bottom-2 right-2 flex flex-col gap-2">
            <Button
              size="icon"
              variant="secondary"
              className="bg-white hover:bg-gray-100 text-gray-700 rounded-full shadow-md"
              onClick={handleAddToCart}
            >
              <ShoppingCart size={18} />
            </Button>
            <Button
              size="icon"
              variant="secondary"
              className="bg-white hover:bg-gray-100 text-gray-700 rounded-full shadow-md"
            >
              <Heart size={18} />
            </Button>
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex items-center mb-1">
            {renderStars()}
            <span className="ml-1 text-xs text-gray-500">({product.reviewCount})</span>
          </div>
          
          <h3 className="font-medium text-gray-900 group-hover:text-brand-red transition-colors mb-1">
            {name}
          </h3>
          
          <div className="flex items-center">
            {discountPrice ? (
              <>
                <span className="text-lg font-bold text-brand-red">
                  ${discountPrice.toFixed(2)}
                </span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
