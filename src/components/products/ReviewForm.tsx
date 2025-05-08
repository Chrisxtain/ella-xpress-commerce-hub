
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const ReviewForm = () => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (rating === 0) {
      toast({
        title: "Rating Required",
        description: "Please select a star rating before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    if (comment.trim() === "") {
      toast({
        title: "Comment Required",
        description: "Please write a comment before submitting.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, we would send this to an API
    console.log({ rating, comment });
    
    // Show success message
    toast({
      title: "Review Submitted",
      description: "Thank you for your feedback!",
    });
    
    // Reset form
    setRating(0);
    setComment("");
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-xl font-medium mb-4">Write a Review</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Your Rating
          </label>
          <div className="flex">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onMouseEnter={() => setHoveredStar(star)}
                onMouseLeave={() => setHoveredStar(0)}
                onClick={() => setRating(star)}
                className="p-1"
              >
                <svg 
                  className={`w-8 h-8 ${
                    star <= (hoveredStar || rating) ? "text-yellow-400" : "text-gray-300"
                  } fill-current`}
                  viewBox="0 0 24 24"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-2">
            Your Review
          </label>
          <Textarea
            id="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Share your thoughts about this product..."
            className="resize-none"
            rows={4}
          />
        </div>
        
        <Button 
          type="submit" 
          className="bg-brand-navy hover:bg-brand-navy/90"
        >
          Submit Review
        </Button>
      </form>
    </div>
  );
};

export default ReviewForm;
