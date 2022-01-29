import React, { useState } from "react";
import styled, { css } from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  -webkit-appearance: none;
`;

const Wrapper = styled.div`
  border-radius: 8px;
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  font-size: 1rem;
  padding-right: 24px;
  width: max-content;
  border: none;
  display: flex;
  align-items: center;
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }

  ${({ isFocused }) =>
    isFocused &&
    css`
      outline: 1px dotted #212121;
      outline: 2px solid -webkit-focus-ring-color;
    `}
`;

const Chevron = styled(Icon).attrs(() => ({
  id: "chevron-down",
  strokeWidth: 2,
}))`
  margin-left: 24px;
`;

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const [isFocused, setIsFocused] = useState();

  return (
    <Wrapper isFocused={isFocused}>
      {displayedValue}
      <Chevron />
      <StyledSelect
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChange={onChange}
      >
        {children}
      </StyledSelect>
    </Wrapper>
  );
};

export default Select;
