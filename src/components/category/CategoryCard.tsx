import { Card, CardContent } from "@/components/ui/card";
import type { Category } from "@/types";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card
      className={`${category.color} border-0 hover:scale-105 transition-transform cursor-pointer`}
    >
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-3">{category.emoji}</div>
        <h4 className="font-semibold text-gray-800">{category.name}</h4>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;
