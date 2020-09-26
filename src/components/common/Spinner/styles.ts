import styled from "styled-components";
import { FaCircleNotch } from "react-icons/fa";

type WrapperSpinnerProps = {
  fullHeight: boolean;
};

export const WrapperSpinner = styled.div<WrapperSpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) => (props.fullHeight ? "height: calc(100vh - 75px);" : null)}
`;

export const Circle = styled(FaCircleNotch)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  animation-name: spin;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  color: ${(props) => props.theme.primary};
`;
