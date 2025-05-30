import CategoryCard from "@/components/category/CategoryCard";
import { categories } from "@/data/categories";

const CategoriesSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Выберите возраст малыша 👶
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
