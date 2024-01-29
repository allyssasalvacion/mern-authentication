const localStorageKey = "auth";

export const setUserSession = (login) => {
  const authData = {
    id: login.user._id,
    firstName: login.user.firstName,
    lastName: login.user.lastName,
    email: login.user.email,
    token: login.token,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(authData));
};

export const clearUserSession = () => {
  localStorage.removeItem(localStorageKey);
};

export const isAuthenticated = () => {
  const authData = JSON.parse(localStorage.getItem(localStorageKey));
  return Boolean(authData && authData.token);
};

export const getAuthUser = () => {
  const authData = JSON.parse(localStorage.getItem(localStorageKey));
  return { ...authData };
};

export const getAccessToken = () => {
  const authData = JSON.parse(localStorage.getItem(localStorageKey));
  return authData ? authData.token : null;
};
