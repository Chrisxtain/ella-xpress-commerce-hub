
import { useParams, useNavigate, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { blogPosts } from "@/data/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, Calendar, User } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

const BlogPostPage = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  // Find the blog post by slug
  const post = blogPosts.find(p => p.slug === postId);
  
  // Handle invalid post ID
  if (!post) {
    setTimeout(() => navigate("/blog"), 0);
    return null;
  }
  
  // Find previous and next posts
  const currentIndex = blogPosts.findIndex(p => p.slug === postId);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to an API
    toast({
      title: "Comment Submitted",
      description: "Thank you for your comment. It will appear after approval.",
    });
    
    // Reset form (in a real app)
    const form = e.target as HTMLFormElement;
    form.reset();
  };

  return (
    <Layout>
      <article className="container mx-auto px-4 py-12">
        {/* Featured Image */}
        <div className="rounded-lg overflow-hidden mb-8 max-h-[500px]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Post Header */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="mb-4">
            <span className="inline-block px-3 py-1 bg-brand-light text-brand-navy text-xs font-medium rounded-full">
              {post.category}
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <div className="flex items-center">
              <User size={18} className="mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              <span>{post.date}</span>
            </div>
          </div>
        </div>
        
        {/* Post Content */}
        <div className="max-w-3xl mx-auto prose prose-lg">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
        
        {/* Post Navigation */}
        <div className="max-w-3xl mx-auto border-t border-b border-gray-200 mt-12 py-6">
          <div className="flex flex-wrap justify-between">
            {prevPost ? (
              <Link 
                to={`/blog/${prevPost.slug}`}
                className="group flex items-center text-gray-600 hover:text-brand-red"
              >
                <ChevronLeft size={18} className="mr-2" />
                <span>Previous: {prevPost.title}</span>
              </Link>
            ) : (
              <div></div>  // Empty div to maintain flex spacing
            )}
            
            {nextPost && (
              <Link 
                to={`/blog/${nextPost.slug}`}
                className="group flex items-center text-gray-600 hover:text-brand-red"
              >
                <span>Next: {nextPost.title}</span>
                <ChevronRight size={18} className="ml-2" />
              </Link>
            )}
          </div>
        </div>
        
        {/* Comments Section */}
        <div className="max-w-3xl mx-auto mt-12">
          <h3 className="text-2xl font-bold mb-6">Leave a Comment</h3>
          <form onSubmit={handleCommentSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1">
                Comment
              </label>
              <Textarea id="comment" name="comment" rows={6} required />
            </div>
            <Button className="bg-brand-navy hover:bg-brand-navy/90">
              Submit Comment
            </Button>
          </form>
        </div>
        
        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6 text-center">You May Also Like</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 3)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id} 
                  to={`/blog/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className="h-48 overflow-hidden">
                      <img
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="font-bold mb-2 group-hover:text-brand-red transition-colors">
                        {relatedPost.title}
                      </h4>
                      <p className="text-sm text-gray-600">{relatedPost.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
