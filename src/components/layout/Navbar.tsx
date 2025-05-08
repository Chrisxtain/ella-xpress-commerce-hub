
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { categories } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  return (
    <header className="sticky top-0 z-40 bg-white border-b shadow-sm">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl font-bold text-brand-navy">
              Ella <span className="text-brand-red">Xpress</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
              Home
            </Link>
            
            {/* Categories Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
                  Categories
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56 bg-white">
                {categories.map((category) => (
                  <DropdownMenuItem key={category.id} className="cursor-pointer">
                    <Link 
                      to={`/category/${category.slug}`} 
                      className="w-full"
                    >
                      {category.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/blog" className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
              Blog
            </Link>
            
            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
              About Us
            </Link>
            
            <Link to="/contact" className="text-sm font-medium text-gray-700 hover:text-brand-red transition-colors">
              Contact
            </Link>
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-500 hover:text-brand-navy transition-colors">
              <Search size={20} />
            </button>
            
            <Link to="/cart" className="relative p-2 text-gray-500 hover:text-brand-navy transition-colors">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-brand-red text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-gray-500 hover:text-brand-navy"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <div 
        className={cn(
          "fixed inset-0 z-30 bg-white lg:hidden transition-transform duration-300 transform",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-4 pt-20">
          <Link 
            to="/" 
            className="py-3 text-lg font-medium border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          
          <div className="py-3 text-lg font-medium border-b">
            Categories
            <div className="mt-2 ml-4 space-y-2">
              {categories.map((category) => (
                <Link 
                  key={category.id}
                  to={`/category/${category.slug}`}
                  className="block py-1 text-base text-gray-600 hover:text-brand-red"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
          
          <Link 
            to="/blog" 
            className="py-3 text-lg font-medium border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          
          <Link 
            to="/about" 
            className="py-3 text-lg font-medium border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          
          <Link 
            to="/contact" 
            className="py-3 text-lg font-medium border-b"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          
          <div className="mt-auto">
            <Button 
              variant="destructive" 
              className="w-full bg-brand-red hover:bg-brand-red/90"
              onClick={() => setIsMenuOpen(false)}
            >
              Close Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
