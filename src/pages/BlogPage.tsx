
import Layout from "@/components/layout/Layout";
import BlogCard from "@/components/blog/BlogCard";
import { blogPosts } from "@/data/products";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Filter posts based on search
  const filteredPosts = searchTerm
    ? blogPosts.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : blogPosts;

  return (
    <Layout>
      {/* Hero Section */}
      <div className="bg-brand-navy text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Tips, trends, and insights to help you make the most of our products.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        {/* Search Bar */}
        <div className="max-w-xl mx-auto mb-12">
          <div className="flex">
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="rounded-r-none"
            />
            <Button className="bg-brand-navy hover:bg-brand-navy/90 rounded-l-none">
              <Search size={18} />
            </Button>
          </div>
        </div>
        
        {/* Featured Post */}
        {!searchTerm && (
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="h-64 md:h-auto">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block px-3 py-1 bg-brand-light text-brand-navy text-xs font-medium rounded-full mb-4">
                    {blogPosts[0].category}
                  </span>
                  <h2 className="text-2xl font-bold mb-4 hover:text-brand-red transition-colors">
                    <a href={`/blog/${blogPosts[0].slug}`}>
                      {blogPosts[0].title}
                    </a>
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{blogPosts[0].author}</span>
                    <span>{blogPosts[0].date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Blog Post Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(searchTerm ? filteredPosts : blogPosts.slice(1)).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium mb-2">No articles found</h3>
            <p className="text-gray-600 mb-4">
              We couldn't find any articles matching your search term.
            </p>
            <Button onClick={() => setSearchTerm("")}>
              Clear Search
            </Button>
          </div>
        )}
        
        {/* Newsletter Signup */}
        <div className="mt-16 bg-brand-light rounded-lg p-8">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-brand-navy mb-4">
              Stay Updated with Our Newsletter
            </h3>
            <p className="text-gray-700 mb-6">
              Subscribe to get the latest articles, product updates, and exclusive offers delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row sm:max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="sm:rounded-r-none mb-2 sm:mb-0"
              />
              <Button className="bg-brand-red hover:bg-brand-red/90 sm:rounded-l-none sm:flex-shrink-0">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
