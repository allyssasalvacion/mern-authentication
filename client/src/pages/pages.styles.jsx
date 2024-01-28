import styled from "styled-components";
import { COLORS, SIZES } from "../constants/theme";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 100vh;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;

  @media screen and (max-width: ${SIZES.lg}) {
    grid-template-columns: 1fr;
  }
`;

export const Background = styled.div`
  background: url("../wallpaper.jpg") center/cover no-repeat;

  @media screen and (max-width: ${SIZES.md}) {
    display: none;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  padding: 4rem 2rem;
  box-sizing: border-box;
  background: ${COLORS.white};
  flex: 1;

  @media screen and (max-width: ${SIZES.lg}) {
    padding: 1rem 2rem;
  }

  @media screen and (max-width: ${SIZES.sm}) {
    padding: 0 2rem;
  }

  h1 {
    font-size: 6rem;
    color: ${COLORS.primaryText};

    @media screen and (max-width: ${SIZES.lg}) {
      font-size: 4rem;
    }
  }

  h3 {
    color: ${COLORS.secondaryText};
    font-weight: 400;
    margin-top: 0.5rem;
    max-width: 500px;
    line-height: 1.9rem;

    @media screen and (max-width: ${SIZES.lg}) {
      font-size: 1.1rem;
      line-height: 1.6rem;
    }
  }

  h4 {
    color: ${COLORS.tertiaryText};
    font-weight: 400;
    margin-top: 1.5rem;
    width: 100%;
  }

  h4 a {
    cursor: pointer;
    color: ${COLORS.accent};
    text-decoration: none;
  }

  h4 a:hover {
    font-weight: 600;
  }

  form {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 450px;
    width: 100%;
  }

  .name-group {
    display: flex;
    flex-direction: row;
    gap: 1.6rem;
    width: 100%;
  }

  .name-group div {
    display: flex;
    flex-direction: column;
    text-align: left;
    flex: 1;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;
