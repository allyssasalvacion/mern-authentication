import styled from "styled-components";
import { COLORS } from "../constants/theme";

const StyledButton = styled.button`
  height: 3rem;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;

  &.contained {
    background: ${COLORS.accent};
    border: 1px solid ${COLORS.accent};
    border-radius: 0.5rem;
    color: ${COLORS.white};
    width: 100%;
  }

  &.text {
    background: none;
    color: ${COLORS.accent};
    border: none;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const CustomButton = ({ label, type, handleClick, variant = "contained" }) => {
  return (
    <StyledButton type={type} className={variant} onClick={handleClick}>
      {label}
    </StyledButton>
  );
};

export default CustomButton;
