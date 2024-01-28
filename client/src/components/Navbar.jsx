import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import CustomButton from "../components/Button";
import { clearUserSession } from "../utils/session";
import { COLORS } from "../constants/theme";

const Header = styled.div`
  padding: 2rem;
  text-align: left;
  display: flex;
  justify-content: space-between;

  h2 {
    font-weight: 700;
    color: ${COLORS.primaryText};
    font-family: "Cedarville Cursive", "Inter";
  }
`;

const Navbar = ({ logout = false }) => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    clearUserSession();
    navigate("/login");
  };

  return (
    <Header>
      <h2>Khalil Giannis</h2>
      {logout && (
        <CustomButton
          label="Log out"
          type="text"
          handleClick={logoutUser}
          variant="text"
        />
      )}
    </Header>
  );
};

export default Navbar;
