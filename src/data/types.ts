
export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number;
  category: string;
  categorySlug: string;
  image: string;
  description: string;
  rating: number;
  reviewCount: number;
  features: string[];
  isHot?: boolean;
  isLimited?: boolean;
  isFeatured?: boolean;
  reviews: Review[];
}

export interface Category {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
}

export interface Review {
  id: number;
  user: string;
  rating: number;
  date: string;
  comment: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
