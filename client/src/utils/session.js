import { ReactSession } from "react-client-session";

export const setUserSession = (login) => {
  ReactSession.set("id", login.user._id);
  ReactSession.set("firstName", login.user.firstName);
  ReactSession.set("lastName", login.user.lastName);
  ReactSession.set("email", login.user.email);
  ReactSession.set("token", login.token);
};

export const clearUserSession = () => {
  ReactSession.remove("id");
  ReactSession.remove("firstName");
  ReactSession.remove("lastName");
  ReactSession.remove("email");
  ReactSession.remove("token");
};

export const isAuthenticated = () => {
  const token = ReactSession.get("token");
  return Boolean(token);
};

export const getAuthUser = () => {
  const id = ReactSession.get("id");
  const firstName = ReactSession.get("firstName");
  const lastName = ReactSession.get("lastName");
  const email = ReactSession.get("email");
  const token = ReactSession.get("token");

  return {
    id,
    firstName,
    lastName,
    email,
    token,
  };
};

export const getAccessToken = () => {
  return ReactSession.get("token");
};
