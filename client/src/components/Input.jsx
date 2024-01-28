import styled from "styled-components";
import { useState } from "react";
import { COLORS } from "../constants/theme";

const StyledInput = styled.div`
  width: 100%;
  position: relative;

  label {
    font-size: 0.75rem;
    font-weight: 700;
    color: ${COLORS.tertiaryText};
    margin-bottom: 0.5rem;
    text-transform: uppercase;
  }

  input {
    width: 100%;
    height: 3rem;
    background: ${COLORS.grayBg};
    color: ${COLORS.primaryText};
    margin-bottom: 2rem;
    border-radius: 0.5rem;
    border: none;
    padding: 0 1rem;
    box-sizing: border-box;
  }

  input:focus {
    outline: none;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
  }

  p {
    position: absolute;
    top: 31px;
    right: 16px;
    font-size: 1.5rem;
    cursor: pointer;
    user-select: none;
  }
`;

const CustomInput = ({ type, label, data, onChange }) => {
  const [hidePassword, setHidePassword] = useState(true);

  const passwordType = hidePassword ? "password" : "text";

  return (
    <StyledInput>
      <div className="input-group">
        <label>{label}</label>
        <input
          type={type === "password" ? passwordType : type}
          value={data}
          onChange={onChange}
        />
      </div>
      {type === "password" && (
        <p className="pass-icon" onClick={() => setHidePassword(!hidePassword)}>
          {hidePassword ? "🙈" : "🙉"}
        </p>
      )}
    </StyledInput>
  );
};

export default CustomInput;
