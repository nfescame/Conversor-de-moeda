import React from "react";

export const AuthContext = React.createContext({});

export const AuthProviders = (props) => {
  const title = "Currency Exchange";

  return (
    <AuthContext.Provider value={{ title }}>
      {props.children}
    </AuthContext.Provider>
  );
};
