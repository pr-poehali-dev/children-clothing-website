import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import CartModal from "@/components/cart/CartModal";
import CheckoutModal from "@/components/checkout/CheckoutModal";

const Header = () => {
  const { getItemCount } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const itemCount = getItemCount();

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🌈</span>
            <h1 className="text-2xl font-bold text-purple-600">КидСтайл</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-purple-600 transition-colors"
            >
              Контакты
            </a>
          </nav>
          <Button
            variant="outline"
            className="rounded-full relative"
            onClick={() => setIsCartOpen(true)}
          >
            🛒 Корзина
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-purple-600 text-white min-w-6 h-6 flex items-center justify-center rounded-full text-xs">
                {itemCount}
              </Badge>
            )}
          </Button>
        </div>
      </header>

      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
};

export default Header;
