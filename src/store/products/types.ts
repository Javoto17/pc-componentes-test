export interface Product {
  id: number;
  name: string;
  score: number;
}

export interface ProductsState {
  products: Product[];
  cart: Product[];
}

export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

export const ADD_PRODUCT = "ADD_PRODUCT";

export interface FetchProductsAction {
  type: typeof FETCH_PRODUCTS;
  payload: string;
}

export interface FetchProductsSuccessAction {
  type: typeof FETCH_PRODUCTS_SUCCESS;
  payload: Product[];
}

export interface FetchProductsErrorAction {
  type: typeof FETCH_PRODUCTS_ERROR;
  payload: any;
}

export interface AddProductAction {
  type: typeof ADD_PRODUCT;
  payload: Product;
}

export type ProductActionTypes =
  | FetchProductsAction
  | FetchProductsSuccessAction
  | FetchProductsErrorAction
  | AddProductAction;
