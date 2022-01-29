import React from "react";
import styled, { css } from "styled-components";
import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const sizeToInputStyleMap = {
  small: css`
    font-size: 14px;
    border-bottom: 1px solid ${COLORS.black};
    line-height: 16px;
    padding: 0 0 0 24px;
  `,
  large: css`
    font-size: 18px;
    border-bottom: 2px solid ${COLORS.black};
    line-height: 21px;
    padding: 0 0 0 36px;
  `,
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
  ...delegated
}) => {
  return (
    <Wrapper size={size}>
      <StyledIcon id={icon} size={size} />
      <VisuallyHidden>
        <label>{label}</label>
      </VisuallyHidden>
      <Input
        width={width}
        placeholder={placeholder}
        size={size}
        {...delegated}
      />
    </Wrapper>
  );
};

const StyledIcon = styled(Icon).attrs(({ size }) => ({
  size: size === "small" ? 16 : 24,
  strokeWidth: size === "small" ? 1 : 2,
}))`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
  color: ${COLORS.gray700};
`;

const Wrapper = styled.div`
  position: relative;
  display: inline-block;
  color: ${COLORS.gray500};

  height: ${({ size }) => (size === "small" ? "24px" : "36px")};

  &:hover {
    color: ${COLORS.black};
    ${StyledIcon} {
      color: inherit;
    }
  }
`;

const Input = styled.input`
  width: ${({ width }) => `${width}px`};
  height: 100%;
  appearance: none;
  border: none;
  font-weight: 700;

  ${({ size }) => sizeToInputStyleMap[size]};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: normal;
  }

  &:focus {
    outline-offset: 2px;
  }
`;

export default IconInput;
