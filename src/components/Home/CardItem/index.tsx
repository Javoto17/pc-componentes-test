import React from "react";

import { FaPlus } from "react-icons/fa";

import { Product } from "../../../store/products/types";

import {
  Article,
  ImgWrapper,
  Img,
  InfoWrapper,
  NameProduct,
  PriceProduct,
  Button,
  WrapperActions,
  Total,
} from "./styles";

// import Counter from "../Counter";

type defaultProps = {
  name: string;
  image: string;
  onPressAdd(): void;
  score: number;
  total: number;
};

export default function CardItem({
  name,
  image,
  onPressAdd,
  score,
  total,
  ...props
}: defaultProps) {
  return (
    <Article {...props}>
      <ImgWrapper>
        <Img src={image} />
      </ImgWrapper>
      <InfoWrapper>
        <NameProduct>{name}</NameProduct>
        <WrapperActions>
          <PriceProduct>{score}</PriceProduct>
          <Button onClick={onPressAdd}>
            <FaPlus color="fff" size={18} />
          </Button>
          <Total> {total} </Total>
        </WrapperActions>
      </InfoWrapper>
    </Article>
  );
}
