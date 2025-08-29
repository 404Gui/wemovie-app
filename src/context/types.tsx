export type CartItem = {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
};

export type CartState = {
  items: CartItem[];
};

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number } }
  | { type: "INCREMENT_ITEM"; payload: { id: number } }
  | { type: "DECREMENT_ITEM"; payload: { id: number } }
  | { type: "CLEAR_CART" }
  | { type: "SET_ITEM_QUANTITY"; payload: { id: number; quantity: number } };
