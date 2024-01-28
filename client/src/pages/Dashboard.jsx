import { getAuthUser } from "../utils/session";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import { COLORS, SIZES } from "../constants/theme";

const DashboardWrapper = styled.div`
  display: grid;
  place-items: center;

  .dashboard {
    width: 100%;
    max-width: 1480px;

    h3 {
      font-size: 3rem;
      color: ${COLORS.primaryText};
      text-align: left;
      margin-left: 2rem;

      @media screen and (max-width: ${SIZES.lg}) {
        font-size: 2rem;
      }

      @media screen and (max-width: ${SIZES.xs}) {
        font-size: 1.4rem;
      }
    }

    h4 {
      font-size: 1.2rem;
      text-align: left;
      font-weight: 400;
      margin-top: 1rem;
      margin-left: 2rem;
      color: ${COLORS.tertiaryText};
      line-height: 2rem;

      @media screen and (max-width: ${SIZES.xs}) {
        font-size: 1rem;
      }
    }
  }
`;

const Dashboard = () => {
  const { id, firstName, lastName, email } = getAuthUser();

  return (
    <DashboardWrapper>
      <div className="dashboard">
        <Navbar logout />
        <h3>
          {firstName}&nbsp;
          {lastName}
        </h3>
        <h4>
          {email} / ID: {id}
        </h4>
      </div>
    </DashboardWrapper>
  );
};

export default Dashboard;
