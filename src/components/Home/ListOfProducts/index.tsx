import React from "react";

import { Product } from "../../../store/products/types";

import CardItem from "../CardItem";

import { GridList } from "./styles";

type defaultProps = {
  products: Product[];
  onPressAdd(product: Product): void;
};

export default function ListOfProducts({
  products = [],
  onPressAdd,
}: defaultProps) {
  return (
    <GridList>
      {products.map((product, i) => {
        const { score, show, total } = product;
        const { name, id, image } = show;
        return (
          <CardItem
            key={`${name}-${id}`}
            name={name}
            onPressAdd={() => {
              onPressAdd(product);
            }}
            image={image.medium}
            score={score}
            total={total}
          />
        );
      })}
    </GridList>
  );
}
