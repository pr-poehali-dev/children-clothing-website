import { Button } from "@/components/ui/button";

const Header = () => {
  return (
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
  );
};

export default Header;
