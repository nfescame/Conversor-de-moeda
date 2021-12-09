import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";

import { midlle, exchange, api } from "../../apis/api";

import SelectComponent from "../../components/select";

import { AuthContext } from "../../providers/index";

export default function Home() {
  const { select1, select2, paramsState } = useContext(AuthContext);
  const [symbols, setSymbols] = useState([]);
  const [country, setCountry] = useState([]);
  const [inputValue, setInputValueValue] = useState(1);
  const [result, setResult] = useState();

  useEffect(() => {
    axios
      .request(api)
      .then(function (res) {
        setSymbols(Object.keys(res.data.symbols));
        setCountry(Object.values(res.data.symbols));
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
            <label className='form-label'>Valor</label>
            <CurrencyInput
              prefix='$'
              className='form-control'
              id='input-example'
              name='input-name'
              placeholder='Please enter a Value'
              defaultValue={1}
              decimalsLimit={2}
              onValueChange={(value) => setInputValueValue(value)}
            />
          </div>

          <SelectComponent
            country={country}
            symbols={symbols}
            text={"Converter de"}
            name={"de"}
          />

          <SelectComponent
            country={country}
            symbols={symbols}
            text={"Para"}
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
        <div className='row p-4'>
          <h1 className='col-12'>
            ${inputValue} {select1} = ${calculation()} {select2}
          </h1>
        </div>
      </div>
    </div>
  );
}
