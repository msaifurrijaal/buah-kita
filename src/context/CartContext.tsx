import React, { createContext, useContext, useReducer, ReactNode } from "react";

export interface CartItem {
  id: number;
  qty: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: { id: number; qty: number } }
  | { type: "REMOVE_FROM_CART"; payload: { id: number } };

type CartDispatch = React.Dispatch<CartAction>;

const CartContext = createContext<CartItem[] | null>(null);
const CartDispatchContext = createContext<CartDispatch | null>(null);

const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingCartItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingCartItemIndex].qty += action.payload.qty;
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [
          ...state,
          { id: action.payload.id, qty: action.payload.qty },
        ];
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      }
    }
    case "REMOVE_FROM_CART": {
      const existingCartItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (existingCartItemIndex !== -1) {
        const updatedCart = [...state];
        updatedCart[existingCartItemIndex].qty -= 1;

        if (updatedCart[existingCartItemIndex].qty === 0) {
          updatedCart.splice(existingCartItemIndex, 1);
        }
        localStorage.setItem("cart", JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        localStorage.setItem("cart", JSON.stringify(state));
        return state;
      }
    }
    default: {
      throw new Error("Unknown action: " + action);
    }
  }
};

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({
  children,
}: CartContextProviderProps): JSX.Element {
  const storedCart = localStorage.getItem("cart");
  const [cart, dispatch] = useReducer(
    cartReducer,
    storedCart ? JSON.parse(storedCart) : []
  );

  return (
    <CartContext.Provider value={cart}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartContext.Provider>
  );
}

export function useCart(): CartItem[] | null {
  return useContext(CartContext);
}

export function useCartDispatch(): CartDispatch | null {
  return useContext(CartDispatchContext);
}
