
import { Link } from "react-router-dom";
import { BlogPost } from "@/data/types";

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  const { id, title, excerpt, author, date, image, category, slug } = post;
  
  return (
    <Link to={`/blog/${slug}`} className="group">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="relative aspect-w-16 aspect-h-9 h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-2 left-2">
            <span className="px-3 py-1 bg-brand-navy/80 text-white text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-medium text-gray-900 group-hover:text-brand-red transition-colors mb-2">
            {title}
          </h3>
          <p className="text-sm text-gray-600 mb-3 line-clamp-2">
            {excerpt}
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>{author}</span>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
