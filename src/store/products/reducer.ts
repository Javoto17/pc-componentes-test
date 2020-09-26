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
            total: 0
          }))
        ]
      };
    case ADD_PRODUCT: {
      const existInCart = state.cart.findIndex(
        (product) => product.show.id === action.payload.show.id
      );
      return {
        ...state,
        products: !existInCart
          ? [
              ...state.products,
              {
                ...action.payload,
                total: 1
              }
            ]
          : state.products.map((product) =>
              product.show.id === action.payload.show.id
                ? {
                    ...product,
                    total: product.total + 1
                  }
                : product
            ),
        cart: !existInCart
          ? [
              ...state.cart,
              {
                ...action.payload,
                total: 1
              }
            ]
          : state.cart.map((product) =>
              product.show.id === action.payload.show.id
                ? {
                    ...product,
                    total: product.total + 1
                  }
                : product
            )
      };
    }
    default:
      return state;
  }
}
