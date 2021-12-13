/* eslint-disable use-isnan */
import React, { useState, useContext } from "react";
import axios from "axios";

import { midlle, exchange } from "../../apis/api";
import { AuthContext } from "../../providers/index";

import Header from "../../components/header";
import Form from "../../components/form";
import Card from "../../components/card";

import "./style.css";

export default function Home() {
  const { paramsState, country1, country2 } = useContext(AuthContext);
  const [inputValue, setInputValueValue] = useState(1);
  const [result, setResult] = useState();

  const handleClick = async () => {
    const options = Object.assign(exchange, paramsState, midlle);

    console.log(options);
    axios
      .request(options)
      .then(function (res) {
        setResult(res.data.new_amount);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  function calculation() {
    const calc = result * inputValue;

    if (isNaN(calc)) {
      return "0.00";
    }
    return calc.toFixed(2);
  }
  function calculationReverse() {
    const reverse = 1 / result;
    return reverse;
  }
  function dateNow() {
    const data = new Date();

    const dia = String(data.getDate()).padStart(2, "0");

    const mes = String(data.getMonth() + 1).padStart(2, "0");

    const ano = data.getFullYear();

    const dataAtual = dia + "/" + mes + "/" + ano;

    return dataAtual;
  }

  return (
    <div className='container mb-5'>
      <Header text={"Conversor de Moedas"} />
      <Form
        setInputValueValue={setInputValueValue}
        setResult={setResult}
        handleClick={handleClick}
      />

      <section className='container d-flex justify-content-center containerResult'>
        <div className='row p-4 contentResult'>
          <Header text={"Resultado da conversão"} />

          <Card
            country1={country1}
            inputValue={inputValue}
            country2={country2}
            calculation={calculation}
          />

          <p>
            <b>Data cotação utilizada: </b>
            {dateNow()}
          </p>
          <p>
            <b>Taxa: </b>
          </p>
          <p>
            1 {country1[1]} = {result} {country2[1]}
          </p>
          <p>
            1 {country2[1]} = {calculationReverse()} {country1[1]}
          </p>
        </div>
      </section>
    </div>
  );
}
