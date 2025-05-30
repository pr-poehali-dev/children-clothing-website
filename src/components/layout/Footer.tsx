const Footer = () => {
  return (
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
  );
};

export default Footer;
