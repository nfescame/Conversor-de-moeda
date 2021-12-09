/* eslint-disable use-isnan */
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";

import { midlle, exchange, api } from "../../apis/api";

import SelectComponent from "../../components/select";

import { AuthContext } from "../../providers/index";

export default function Home() {
  const { paramsState, country1, country2 } = useContext(AuthContext);
  const [symbols, setSymbols] = useState([]);
  const [countrys, setCountrys] = useState([]);
  const [inputValue, setInputValueValue] = useState();
  const [result, setResult] = useState();

  useEffect(() => {
    axios
      .request(api)
      .then(function (res) {
        setSymbols(Object.keys(res.data.symbols));
        setCountrys(Object.values(res.data.symbols));
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

  return (
    <div className='container mb-5'>
      <form
        className='container mt-5 mb-5 p-4'
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
            <label className='form-label'>Value</label>
            <CurrencyInput
              prefix='$'
              className='form-control'
              id='input-example'
              name='input-name'
              placeholder='Please enter a Value'
              defaultValue={""}
              decimalsLimit={2}
              onValueChange={(value) => setInputValueValue(value)}
            />
          </div>

          <SelectComponent
            setResult={setResult}
            countrys={countrys}
            symbols={symbols}
            text={"Convert from"}
            name={"de"}
          />

          <SelectComponent
            setResult={setResult}
            countrys={countrys}
            symbols={symbols}
            text={"To"}
            name={"para"}
          />
          <div className='col-md-1 mt-5'>
            <button
              type='button'
              className='btn btn-primary mb-2 p-1 w-100'
              onClick={handleClick}
            >
              <span>
                <i className='fas fa-redo-alt'></i>
              </span>
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
        <div className='row p-4' style={{ textAlign: "center" }}>
          <h2>
            ${inputValue}.00 {country1}
          </h2>
          <h2 style={{ color: "red" }}>=</h2>{" "}
          <h2>
            ${calculation()} {country2}
          </h2>
        </div>
      </div>
    </div>
  );
}
