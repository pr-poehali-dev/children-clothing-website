import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const categories = [
    { name: "Малыши 0-2", emoji: "👶", color: "bg-pink-100" },
    { name: "Девочки 3-8", emoji: "👧", color: "bg-purple-100" },
    { name: "Мальчики 3-8", emoji: "👦", color: "bg-blue-100" },
    { name: "Подростки", emoji: "🧒", color: "bg-green-100" },
  ];

  const products = [
    {
      id: 1,
      name: "Платье с единорогами",
      price: "2 490 ₽",
      image:
        "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300",
      badge: "Новинка",
      badgeColor: "bg-pink-500",
    },
    {
      id: 2,
      name: "Комбинезон космонавт",
      price: "3 290 ₽",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300",
      badge: "Хит",
      badgeColor: "bg-purple-500",
    },
    {
      id: 3,
      name: "Кеды с динозаврами",
      price: "1 890 ₽",
      image:
        "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=300",
      badge: "Скидка",
      badgeColor: "bg-red-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50">
      {/* Header */}
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
          <Button variant="outline" className="rounded-full">
            🛒 Корзина
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-800 mb-4">
              Мода для маленьких
              <span className="block text-purple-600">мечтателей! ✨</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Уютная и стильная одежда для ваших малышей. От первых шагов до
              больших приключений!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-3"
              >
                Смотреть коллекцию 👀
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 py-3"
              >
                Акции и скидки 🎉
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Выберите возраст малыша 👶
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className={`${category.color} border-0 hover:scale-105 transition-transform cursor-pointer`}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{category.emoji}</div>
                  <h4 className="font-semibold text-gray-800">
                    {category.name}
                  </h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Хиты продаж 🔥
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
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
                    >
                      В корзину
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-2xl">🌈</span>
            <h1 className="text-2xl font-bold">КидСтайл</h1>
          </div>
          <p className="text-gray-400 mb-6">
            Делаем детство ярче с каждым нарядом!
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Доставка и возврат
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Контакты
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
