import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  Background,
  Container,
  FormContainer,
  LeftContainer,
} from "./pages.styles";
import Navbar from "../components/Navbar";
import CustomButton from "../components/Button";
import CustomInput from "../components/Input";
import Loading from "../components/Loading";
import ErrorBox from "../components/ErrorBox";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const registerUser = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = data;

    try {
      setLoading(true);

      const { data } = await axios.post("/register", {
        firstName,
        lastName,
        email,
        password,
      });

      if (data.error) {
        setError(data.error);
      } else {
        setData({});
        setError("");
        toast.success("Registration successful");
        navigate("/login");
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
          <h1>Join us!</h1>
          <h3>
            Embark on a new adventure! Join our community for a unique
            experience and endless possibilities.
          </h3>
          <form onSubmit={registerUser}>
            <div className="name-group">
              <CustomInput
                label="First Name"
                type="text"
                value={data.firstName}
                onChange={(e) =>
                  setData({ ...data, firstName: e.target.value })
                }
              />
              <CustomInput
                label="Last Name"
                type="text"
                value={data.lastName}
                onChange={(e) => setData({ ...data, lastName: e.target.value })}
              />
            </div>
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
            <CustomButton type="submit" label="REGISTER" />
            <h4>
              Already have an account? <a href="/login">Sign in</a>
            </h4>
          </form>
        </FormContainer>
        {loading && <Loading />}
      </LeftContainer>
      <Background />
    </Container>
  );
};

export default Register;
