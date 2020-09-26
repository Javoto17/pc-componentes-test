import React from "react";
import PropTypes from "prop-types";

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
} from "./styles";

// import Counter from "../Counter";

type defaultProps = {
  name: string;
  image: string;
  onPressAdd(): void;
  score: number;
};

export default function CardItem({
  name,
  image,
  onPressAdd,
  score,
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
          {/* {quantity === 0 ? (
     
          ) : (
            <Counter
              onPressReduce={onPressReduce}
              quantity={quantity}
              onPressAdd={onPressAdd}
            />
          )} */}
        </WrapperActions>
      </InfoWrapper>
    </Article>
  );
}
