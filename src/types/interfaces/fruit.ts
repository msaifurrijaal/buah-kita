export interface Fruit {
  name: string;
  id: number;
  weight: number;
  stock: number;
  condition: string;
  img: string;
  price: number;
  place: string;
  sold: number;
  rating: 5;
  category_id: number;
  discount: number;
  category: {
    id: number;
    name: string;
  };
}
