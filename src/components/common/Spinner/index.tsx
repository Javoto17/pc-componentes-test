import React from "react";
import PropTypes from "prop-types";

import { Circle, WrapperSpinner } from "./styles";

type defaultProps = {
  size: string;
  fullHeight: boolean;
};

const Spinner = ({ size, fullHeight }: defaultProps) => {
  return (
    <WrapperSpinner fullHeight={fullHeight}>
      <Circle size={size} />
    </WrapperSpinner>
  );
};

Spinner.propTypes = {
  size: PropTypes.string,
  fullHeight: PropTypes.bool,
};

Spinner.defaultProps = {
  size: "16px",
  fullHeight: false,
};

export default Spinner;
