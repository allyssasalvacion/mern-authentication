import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Background,
  FormContainer,
  LeftContainer,
} from "./pages.styles";
import Navbar from "../components/Navbar";
import CustomButton from "../components/Button";
import CustomInput from "../components/Input";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";
import { setUserSession } from "../utils/session";

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async (e) => {
    e.preventDefault();
    const { email, password } = data;

    try {
      setLoading(true);

      const { data } = await axios.post("/login", {
        email,
        password,
      });

      if (data.error) {
        setError(data.error);
      } else {
        setData({});
        setError("");
        setUserSession(data);
        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <LeftContainer>
        <Navbar />
        <FormContainer>
          <h1>Hi there!</h1>
          <h3>
            Ready to dive back into our community? Log in to pick up where you
            left off 👋🏼
          </h3>
          <form onSubmit={loginUser}>
            <CustomInput
              label="Email"
              type="email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
            />
            <CustomInput
              label="Password"
              type="password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
            />
            {error && <ErrorBox errorMessage={error} />}
            <CustomButton type="submit" variant="contained" label="LOGIN" />
            <h4>
              Don't have an account? <a href="/register">Sign up</a>
            </h4>
          </form>
        </FormContainer>
        {loading && <Loading />}
      </LeftContainer>
      <Background />
    </Container>
  );
};

export default Login;
