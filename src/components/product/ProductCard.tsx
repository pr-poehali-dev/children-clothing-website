import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <Badge
          className={`absolute top-3 left-3 ${product.badgeColor} text-white`}
        >
          {product.badge}
        </Badge>
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-purple-600">
            {product.price}
          </span>
          <Button
            size="sm"
            className="bg-purple-600 hover:bg-purple-700 rounded-full"
            onClick={handleAddToCart}
          >
            В корзину
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;
