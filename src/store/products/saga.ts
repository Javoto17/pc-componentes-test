import { call, put, takeEvery, all } from "redux-saga/effects";
import { fetchProductsSuccess, fetchProductsError } from "./actions";
import { FETCH_PRODUCTS, FetchProductsAction } from "./types";

import { getProducts } from "../../api/products";

function* fetchProducts(action: FetchProductsAction) {
  try {
    const { payload } = action;
    const response = yield call(getProducts, payload);
    yield put(fetchProductsSuccess(response));
  } catch (error) {
    yield put(fetchProductsError(error));
  }
}

export function* watchFetchProducts() {
  yield takeEvery(FETCH_PRODUCTS, fetchProducts);
}
