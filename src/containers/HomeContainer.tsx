import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addProduct, fetchProducts } from "../store/products/actions";
import { Product, ProductsState } from "../store/products/types";

import Home from "./../components/Home";

interface RootState {
  products: ProductsState;
}

export default function HomeContainer() {
  const products = useSelector((state: RootState) => state.products.products);
  const dispatch = useDispatch();

  const onPressAdd = (product: Product) => {
    dispatch(addProduct(product));
  };

  useEffect(() => {
    dispatch(fetchProducts("doctor"));
  }, []);

  console.log(products);

  return (
    <>
      <Home products={products} onPressAdd={onPressAdd} />
    </>
  );
}
