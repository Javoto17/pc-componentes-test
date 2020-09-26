import {
  ProductsState,
  ProductActionTypes,
  ADD_PRODUCT,
  FETCH_PRODUCTS_SUCCESS
} from "./types";

const initialState: ProductsState = {
  products: [],
  cart: []
};

export function productsReducer(
  state = initialState,
  action: ProductActionTypes
): ProductsState {
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products: [
          ...state.products,
          ...action.payload.map((product) => ({
            ...product,
            isAdded: false
          }))
        ]
      };
    case ADD_PRODUCT:
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    default:
      return state;
  }
}
