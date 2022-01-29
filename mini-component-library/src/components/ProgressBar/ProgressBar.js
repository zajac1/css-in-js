import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const WrapperBase = styled.div`
  background-color: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  min-width: 370px;
  width: 100%;
`;

const WrapperLarge = styled(WrapperBase)`
  height: 24px;
  padding: 4px;
`;

const WrapperMedium = styled(WrapperBase)`
  height: 12px;
`;

const WrapperSmall = styled(WrapperBase)`
  height: 8px;
`;

const ProgressIndicator = styled.div`
  width: ${({ value }) => value}%;
  height: 100%;
  background-color: ${COLORS.primary};
  border-radius: ${({ value }) => (value >= 98 ? "4px;" : "4px 0 0 4px;")};
  transition: all 0.1s ease-in-out;
`;

const sizeToComponentMap = {
  small: WrapperSmall,
  medium: WrapperMedium,
  large: WrapperLarge,
};

const ProgressBar = ({ value, size }) => {
  const WrapperComponent = sizeToComponentMap[size];

  return (
    <WrapperComponent
      role="progressbar"
      $size={size}
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <ProgressIndicator value={value} />
      <VisuallyHidden>{value}%</VisuallyHidden>
    </WrapperComponent>
  );
};

export default ProgressBar;
