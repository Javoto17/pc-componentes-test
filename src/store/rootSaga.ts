import { all, fork } from "redux-saga/effects";
import { watchFetchProducts } from "./products/saga";

export const rootSaga = function* root() {
  yield all([fork(watchFetchProducts)]);
};
