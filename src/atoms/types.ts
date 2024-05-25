export type OrderType = "Eat In" | "Take Away";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
};

export type Category = {
  id: string;
  name: string;
};

export type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type Order = {
  id: string;
  type: OrderType;
  items: CartItem[];
};

export type User = {
  id: string;
  name: string;
  email: string;
};
