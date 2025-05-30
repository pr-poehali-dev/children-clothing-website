import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCheckout: () => void;
}

const CartModal = ({ isOpen, onClose, onCheckout }: CartModalProps) => {
  const { state, updateQuantity, removeFromCart } = useCart();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            🛒 Корзина
            <Badge variant="secondary">{state.items.length}</Badge>
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 max-h-96 overflow-y-auto">
          {state.items.length === 0 ? (
            <p className="text-center text-gray-500 py-8">Корзина пуста</p>
          ) : (
            state.items.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 border rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h4 className="font-medium text-sm">{item.name}</h4>
                  <p className="text-purple-600 font-bold">{item.price}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    -
                  </Button>
                  <span className="w-8 text-center">{item.quantity}</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => removeFromCart(item.id)}
                  >
                    <Icon name="Trash2" size={16} />
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>

        {state.items.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-bold">Итого:</span>
              <span className="text-xl font-bold text-purple-600">
                {state.total.toLocaleString()} ₽
              </span>
            </div>
            <Button
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={onCheckout}
            >
              Оформить заказ
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CartModal;
