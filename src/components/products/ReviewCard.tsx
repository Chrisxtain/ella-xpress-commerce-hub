
import { Review } from "@/data/types";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const { user, rating, date, comment } = review;
  
  // Generate stars for rating
  const renderStars = () => {
    const stars = [];
    
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-yellow-400" : "text-gray-300"} fill-current`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    }
    
    return stars;
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div className="bg-brand-navy text-white w-8 h-8 rounded-full flex items-center justify-center mr-3">
            {user.charAt(0)}
          </div>
          <div>
            <h4 className="font-medium text-gray-900">{user}</h4>
            <div className="flex">
              {renderStars()}
            </div>
          </div>
        </div>
        <div className="text-sm text-gray-500">{date}</div>
      </div>
      <p className="text-gray-700">{comment}</p>
    </div>
  );
};

export default ReviewCard;
