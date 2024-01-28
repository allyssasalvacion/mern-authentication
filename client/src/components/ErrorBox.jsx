import styled from "styled-components";
import { COLORS } from "../constants/theme";

const StyledError = styled.div`
  border: 1px dashed ${COLORS.error};
  background: ${COLORS.errorBg};
  color: ${COLORS.error};
  width: 100%;
  border-radius: 0.2rem;
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 12px;
  text-align: left;
  margin-bottom: 1rem;
`;

const ErrorBox = ({ errorMessage }) => {
  return <StyledError>Error: {errorMessage}</StyledError>;
};

export default ErrorBox;
