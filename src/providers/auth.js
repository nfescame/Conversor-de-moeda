import React, { createContext, useState, useEffect } from "react";
import apis from "../apis/api";

export const AuthContext = createContext({});

export const Auth = (props) => {
  const { api, apiQueries, apiLastQueries, apiKey } = apis;
  const [data, setData] = useState();
  const [currency, setCurrency] = useState("USD_BRL,BRL_USD");
  const [result, setResult] = useState();
  console.log(currency);

  useEffect(() => {
    const getData = async () => {
      const res = await api.get();
      setData(Object.values(res.data.results));
    };

    getData();

    const getDataQ = async () => {
      const res = await apiQueries.get(`${currency}${apiLastQueries}${apiKey}`);
      setResult(Object.values(res.data));
    };
    getDataQ();
  }, [currency]);

  return (
    <AuthContext.Provider value={{ data, setCurrency, result }}>
      {props.children}
    </AuthContext.Provider>
  );
};
