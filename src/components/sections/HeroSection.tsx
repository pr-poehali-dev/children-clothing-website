import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
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
  );
};

export default HeroSection;
