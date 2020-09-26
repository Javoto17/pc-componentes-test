import styled from "styled-components";

export const Article = styled.article`
  min-height: 200px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
`;

export const ImgWrapper = styled.div`
  border-radius: 8px 8px 0px 0px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`;

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  padding: 8px 16px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const NameProduct = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin: 4px 0px;
  color: ${(props) => props.theme.textColorPrimary};
`;

export const PriceProduct = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${(props) => props.theme.textColorPrimary};
`;

export const Total = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => props.theme.textColorPrimary};
`;

export const Button = styled.button`
  border-radius: 5px;
  background: ${(props) => props.theme.primary};
  padding: 6px 10px;
`;

export const ButtonCounter = styled.button`
  background: ${(props) => props.theme.primary};
  padding: 6px 10px;
`;

export const WrapperActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;
