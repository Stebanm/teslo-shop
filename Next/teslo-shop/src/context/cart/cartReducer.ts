import { ICartProduct } from "@/src/interfaces";
import { CartState } from "./";

type CartActionType =
  | {
      type: "[CART] - LoadCart from Cookies | Storage";
      payload: ICartProduct[];
    }
  | { type: "[CART] - Update Products in Cart"; payload: ICartProduct[] }
  | { type: "[CART] - Change Cart Quantity"; payload: ICartProduct }
  | { type: "[CART] - Remove Product in Cart"; payload: ICartProduct }
  | {
      type: "[CART] - Update Order Sumary";
      payload: {
        numberOfItems: number;
        subtotal: number;
        tax: number;
        total: number;
      };
    };

export const cartReducer = (
  state: CartState,
  action: CartActionType
): CartState => {
  switch (action.type) {
    case "[CART] - LoadCart from Cookies | Storage":
      return {
        ...state,
        cart: action.payload,
      };

    case "[CART] - Update Products in Cart":
      return {
        ...state,
        cart: action.payload,
      };

    case "[CART] - Change Cart Quantity":
      return {
        ...state,
        cart: state.cart.map((product) => {
          if (product._id !== action.payload._id) return product;
          if (product.size !== action.payload.size) return product;

          return action.payload;
        }),
      };

    case "[CART] - Remove Product in Cart":
      return {
        ...state,
        cart: state.cart.filter(
          (item) =>
            !(
              item._id === action.payload._id &&
              item.size === action.payload.size
            )
        ),
      };

    case "[CART] - Update Order Sumary":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
