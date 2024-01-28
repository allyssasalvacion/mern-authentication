import styled from "styled-components";
import { COLORS } from "../constants/theme";

const StyledSpinner = styled.img`
  width: 7rem;
`;

const SpinnerWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: ${COLORS.backdrop};

  display: flex;
  justify-content: center;
`;

const Loading = () => {
  return (
    <SpinnerWrapper>
      <StyledSpinner src="/spinner.svg" />;
    </SpinnerWrapper>
  );
};

export default Loading;
