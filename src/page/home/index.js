import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";

import { listquotes, midlle, exchange } from "../../apis/api";

import SelectComponent from "../../components/select";

export default function Home() {
  const [state, setState] = useState(["BRL"]);
  const [inputValue, setInputValueValue] = useState(1);
  // params: { from: "SGD", to: "MYR", q: "1.0" },
  const [select1, setSelect1] = useState("BRL");
  const [select2, setSelect2] = useState("BRL");
  const [paramsState, setParamsState] = useState({
    params: { from: select1, to: select2, q: "1.0" },
  });
  const [result, setResult] = useState();

  useEffect(() => {
    const options = Object.assign(listquotes, midlle);
    axios
      .request(options)
      .then(function (res) {
        setState([...state, ...res.data]);
      })
      .catch(function (error) {
        console.error(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick = async () => {
    console.log(paramsState);
    setParamsState({ params: { from: select1, to: select2, q: "1.0" } });
    const options = Object.assign(exchange, paramsState, midlle);
    axios
      .request(options)
      .then(function (res) {
        setResult(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  function calculation() {
    const calc = result * inputValue;
    return calc;
  }

  return (
    <>
      <form
        className='container'
        style={{ width: "100%", border: "solid 1px black" }}
      >
        <div className='row'>
          <div className='col-12'>
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
            setSelect={setSelect1}
            setParamsState={setParamsState}
            state={state}
            text={"Converter de"}
            name={"de"}
          />

          <SelectComponent
            setSelect={setSelect2}
            setParamsState={setParamsState}
            state={state}
            text={"Para"}
            name={"para"}
          />
        </div>

        <button type='button' className='btn btn-primary' onClick={handleClick}>
          <span>
            <i className='fas fa-redo-alt'></i>
          </span>
        </button>
      </form>
      <h1>{calculation()}</h1>
    </>
  );
}
