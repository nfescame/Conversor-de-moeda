import React, { useState, useEffect } from "react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";
import SelectComponent from "../select";
import { apiSymbols } from "../../apis/api";

import "./style.css";

export default function Form(props) {
  const { setInputValueValue, setResult, handleClick } = props;
  const [symbols, setSymbols] = useState([]);

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

  return (
    <>
      <form className='container mt-4 mb-5 p-4 containerForm'>
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
              type='button'
              className='btn  mb-2 p-2 w-100'
              onClick={handleClick}
            >
              Convert
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
