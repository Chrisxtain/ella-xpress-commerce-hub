
import { Link } from "react-router-dom";
import { Category } from "@/data/types";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Link 
      to={`/category/${category.slug}`}
      className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="aspect-w-16 aspect-h-9 h-48">
        <img 
          src={category.image}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-xl font-bold text-white mb-1">
            {category.name}
          </h3>
          <p className="text-sm text-gray-200">
            {category.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
