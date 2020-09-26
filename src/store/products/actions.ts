import {
  Product,
  ProductActionTypes,
  FETCH_PRODUCTS,
  ADD_PRODUCT,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_ERROR
} from "./types";

export function fetchProducts(name: string): ProductActionTypes {
  return {
    type: FETCH_PRODUCTS,
    payload: name
  };
}

export function fetchProductsSuccess(products: Product[]): ProductActionTypes {
  return {
    type: FETCH_PRODUCTS_SUCCESS,
    payload: products
  };
}

export function fetchProductsError(error: any): ProductActionTypes {
  return {
    type: FETCH_PRODUCTS_ERROR,
    payload: error
  };
}

export function addProduct(product: Product): ProductActionTypes {
  return {
    type: ADD_PRODUCT,
    payload: product
  };
}
