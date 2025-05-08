
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Ella Xpress</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            We're passionate about bringing quality products to our customers at competitive prices.
            Learn more about our journey and mission.
          </p>
        </div>
      </div>
      
      {/* Our Story Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Ella Xpress was founded in 2020 with a simple mission: to provide customers with high-quality products
              across various categories while offering exceptional service. What started as a small online store has
              grown into a trusted retailer with a loyal customer base spanning across the country.
            </p>
            <p className="text-gray-700 mb-4">
              Our founder, Ella Johnson, noticed the gap in the market for an online store that truly put customer
              satisfaction first. With her background in retail and e-commerce, she set out to create a shopping
              experience that was both enjoyable and reliable.
            </p>
            <p className="text-gray-700">
              Today, Ella Xpress continues to grow while maintaining our core values of quality, affordability,
              and excellent customer service. We carefully select each product in our catalog to ensure it meets
              our rigorous standards.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1577962917302-cd874c4e31d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmxhY2slMjBmZW1hbGV8ZW58MHx8MHx8fDA%3D"
              alt="Ella Xpress Founder"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      {/* Our Mission Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-8">
              At Ella Xpress, our mission is to make quality products accessible to everyone by offering a
              wide selection of items at competitive prices, backed by exceptional customer service.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-brand-light w-12 h-12 rounded-full flex items-center justify-center text-brand-navy text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality. Each product is carefully selected and tested.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-brand-light w-12 h-12 rounded-full flex items-center justify-center text-brand-navy text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="font-bold mb-2">Affordability</h3>
                <p className="text-gray-600">
                  We strive to offer competitive pricing without sacrificing product quality.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="bg-brand-light w-12 h-12 rounded-full flex items-center justify-center text-brand-navy text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="font-bold mb-2">Service</h3>
                <p className="text-gray-600">
                  Customer satisfaction is at the heart of everything we do.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-brand-light py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-brand-navy mb-4">Ready to Shop?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Browse our extensive catalog of quality products across various categories.
            We're confident you'll find exactly what you're looking for.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-brand-navy hover:bg-brand-navy/90">
              <Link to="/">Shop Now</Link>
            </Button>
            <Button variant="outline" className="border-brand-navy text-brand-navy hover:bg-brand-navy/10">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
