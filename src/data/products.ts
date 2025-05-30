import type { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Платье с единорогами",
    price: "2 490 ₽",
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=300",
    badge: "Новинка",
    badgeColor: "bg-pink-500",
  },
  {
    id: 2,
    name: "Комбинезон космонавт",
    price: "3 290 ₽",
    image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=300",
    badge: "Хит",
    badgeColor: "bg-purple-500",
  },
  {
    id: 3,
    name: "Кеды с динозаврами",
    price: "1 890 ₽",
    image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=300",
    badge: "Скидка",
    badgeColor: "bg-red-500",
  },
];
