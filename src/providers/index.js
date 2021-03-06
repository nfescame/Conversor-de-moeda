import React, { useState, useEffect } from "react";

export const AuthContext = React.createContext({});

export const AuthProviders = (props) => {
  const title = "Currency Exchange / Escame";
  const [select1, setSelect1] = useState("BRL");
  const [select2, setSelect2] = useState("BRL");
  const [country1, setCountry1] = useState([
    "AED",
    "United Arab Emirates Dirham",
  ]);
  const [country2, setCountry2] = useState([
    "AED",
    "United Arab Emirates Dirham",
  ]);
  const [paramsState, setParamsState] = useState({
    params: { have: select1, want: select2, amount: "1" },
  });

  useEffect(() => {
    setParamsState({
      params: { have: select1, want: select2, amount: "1" },
    });
  }, [select1, select2]);

  return (
    <AuthContext.Provider
      value={{
        title,
        setSelect1,
        setSelect2,
        select1,
        select2,
        setParamsState,
        paramsState,
        country1,
        country2,
        setCountry1,
        setCountry2,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
