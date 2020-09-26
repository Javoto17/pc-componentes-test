import React from "react";

import { Product } from "../../store/products/types";

import ListOfProducts from "./ListOfProducts";

type defaultProps = {
  products: Product[];
  onPressAdd: (product: Product) => void;
};

export default function Home({ products, onPressAdd }: defaultProps) {
  return (
    <>
      <ListOfProducts products={products} onPressAdd={onPressAdd} />
    </>
  );
}
