/* eslint-disable use-isnan */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";

import { midlle, exchange, apiSymbols } from "../../apis/api";

import SelectComponent from "../../components/select";

import { AuthContext } from "../../providers/index";

export default function Home() {
  const { paramsState, country1, country2 } = useContext(AuthContext);
  const [symbols, setSymbols] = useState([]);
  const [inputValue, setInputValueValue] = useState(1);
  const [result, setResult] = useState();

  useEffect(() => {
    axios
      .request(apiSymbols)
      .then(function (res) {
        setSymbols(res.data.supported_codes);
      })
      .catch(function (error) {
        console.error(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async () => {
    const options = Object.assign(exchange, paramsState, midlle);

    axios
      .request(options)
      .then(function (res) {
        setResult(res.data);
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
      <div
        className='container d-flex justify-content-center mt-5'
        style={{ color: "#013F50" }}
      >
        <h1>Conversor de Moedas</h1>
      </div>

      <form
        className='container mt-4 mb-5 p-4'
        style={{
          width: "100%",
          border: "solid 1px white",
          borderRadius: "10px",
          backgroundColor: "#ffffff",
          boxShadow: "2px 2px 20px 1px rgba(0, 0, 0, 0.6)",
        }}
      >
        <div className='row g-3'>
          <div className='col-md-3'>
            <label className='form-label'>Valor</label>
            <CurrencyInput
              prefix='$'
              className='form-control p-3'
              id='input-example'
              name='input-name'
              placeholder='Please enter a Value'
              defaultValue={1}
              decimalsLimit={2}
              onValueChange={(value) => setInputValueValue(value)}
            />
          </div>

          <SelectComponent
            setResult={setResult}
            symbols={symbols}
            text={"Converter de"}
            name={"de"}
          />

          <SelectComponent
            setResult={setResult}
            symbols={symbols}
            text={"Para"}
            name={"para"}
          />
          <div className='col-md-1 mt-5'>
            <button
              style={{ backgroundColor: "#013F50", color: "white" }}
              type='button'
              className='btn  mb-2 p-2 w-100'
              onClick={handleClick}
            >
              Convert
            </button>
          </div>
        </div>
      </form>

      <div
        className='container d-flex justify-content-center'
        style={{
          width: "100%",
          border: "solid 1px white",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "2px 2px 20px 1px rgba(0, 0, 0, 0.6)",
        }}
      >
        <div className='row p-4' style={{ textAlign: "start" }}>
          <h2 style={{ color: "#013F50" }}>Resultado da conversão</h2>
          <div
            className='container p-3 mt-2 mb-2 '
            style={{
              width: "90%",
              border: "solid 1px white",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.6)",
            }}
          >
            <p>
              <b>Conersão de: </b>
              {country1[1]}
            </p>
            <p>
              <b>Valor a converter: </b>${inputValue},00
            </p>
          </div>
          <div
            className='container p-3 mt-4 mb-4'
            style={{
              width: "90%",
              border: "solid 1px white",
              borderRadius: "10px",
              backgroundColor: "#ffffff",
              boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.6)",
            }}
          >
            <p>
              <b>Para: </b>
              {country2[1]}
            </p>
            <p>
              <b>Resultado da conversão: </b>${calculation()}
            </p>
          </div>
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
      </div>
    </div>
  );
}
