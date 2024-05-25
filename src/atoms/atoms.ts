import { atom } from "jotai";
import { OrderType, CartItem } from "./types";

export const orderTypeAtom = atom<OrderType>("Eat In");
export const selectedCategoryAtom = atom<string | null>(null);
export const cartAtom = atom<CartItem[]>([]);
