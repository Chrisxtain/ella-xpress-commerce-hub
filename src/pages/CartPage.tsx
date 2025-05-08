
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
import { MinusIcon, PlusIcon, Trash2Icon, ShoppingCart } from "lucide-react";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, getCartTotal, updateQuantity, removeFromCart, clearCart } = useCart();
  const [couponCode, setCouponCode] = useState("");
  
  // Calculate values
  const subtotal = getCartTotal();
  const shippingCost = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shippingCost + tax;
  
  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      // In a real app, this would validate the coupon with an API
      alert(`Coupon ${couponCode} applied!`);
    }
  };
  
  const handleCheckout = () => {
    // In a real app, this would navigate to checkout process
    alert("Proceeding to checkout!");
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-brand-navy mb-8">Shopping Cart</h1>
        
        {cartItems.length > 0 ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-4 border-b">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-7">
                      <h3 className="font-medium">Product</h3>
                    </div>
                    <div className="col-span-2 text-center">
                      <h3 className="font-medium">Quantity</h3>
                    </div>
                    <div className="col-span-3 text-right">
                      <h3 className="font-medium">Subtotal</h3>
                    </div>
                  </div>
                </div>
                
                {/* Cart items list */}
                {cartItems.map((item) => (
                  <div key={item.product.id} className="p-4 border-b">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      <div className="col-span-7">
                        <div className="flex items-center">
                          <div className="w-20 h-20 rounded overflow-hidden mr-4">
                            <img 
                              src={item.product.image} 
                              alt={item.product.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium mb-1">{item.product.name}</h4>
                            <p className="text-sm text-gray-500">${(item.product.discountPrice || item.product.price).toFixed(2)}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="col-span-2">
                        <div className="flex items-center border rounded-md mx-auto w-min">
                          <button
                            className="px-2 py-1 text-gray-600 hover:text-brand-red"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <MinusIcon size={14} />
                          </button>
                          <span className="px-2 py-1 min-w-[40px] text-center">
                            {item.quantity}
                          </span>
                          <button
                            className="px-2 py-1 text-gray-600 hover:text-brand-red"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <PlusIcon size={14} />
                          </button>
                        </div>
                      </div>
                      
                      <div className="col-span-2 text-right">
                        <span className="font-medium">
                          ${((item.product.discountPrice || item.product.price) * item.quantity).toFixed(2)}
                        </span>
                      </div>
                      
                      <div className="col-span-1 text-right">
                        <button
                          className="text-gray-400 hover:text-brand-red"
                          onClick={() => removeFromCart(item.product.id)}
                        >
                          <Trash2Icon size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Cart actions */}
                <div className="p-4 flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => navigate("/")}
                  >
                    Continue Shopping
                  </Button>
                  <Button 
                    variant="destructive" 
                    onClick={clearCart}
                  >
                    Clear Cart
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-lg mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium">
                      {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Estimated Tax</span>
                    <span className="font-medium">${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between">
                      <span className="font-bold">Total</span>
                      <span className="font-bold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                
                {/* Coupon Code */}
                <div className="mb-6">
                  <div className="flex">
                    <Input
                      type="text"
                      placeholder="Coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="rounded-r-none"
                    />
                    <Button
                      variant="secondary"
                      onClick={handleApplyCoupon}
                      className="rounded-l-none"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
                
                {/* Checkout Button */}
                <Button 
                  className="w-full bg-brand-red hover:bg-brand-red/90"
                  onClick={handleCheckout}
                >
                  <ShoppingCart className="mr-2" size={18} />
                  Proceed to Checkout
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart size={64} className="text-gray-300" />
            </div>
            <h2 className="text-xl font-bold mb-2">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">
              Looks like you haven't added any products to your cart yet.
            </p>
            <Button onClick={() => navigate("/")}>
              Start Shopping
            </Button>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CartPage;
