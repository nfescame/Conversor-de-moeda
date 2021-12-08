import React, { useContext, useState } from "react";
import CurrencyInput from "react-currency-input-field";

import { AuthContext } from "../../providers/auth";

export default function Home() {
  const { data, setCurrency, result } = useContext(AuthContext);
  const [value, setValue] = useState(1);

  // USD_BRL,BRL_USD
  const [select1, setSelect1] = useState("BRL");
  const [select2, setSelect2] = useState("USD");

  function handleChange(e) {
    if (e.target.name === "de") {
      setSelect1(e.target.value);
    } else {
      setSelect2(e.target.value);
    }

    setCurrency(`${select1}_${select2},${select2}_${select1}`);
  }

  function calculation() {
    return <h1>{result * value}result</h1>;
  }

  return (
    <>
      {calculation()}
      <form
        className='container'
        style={{ width: "100%", border: "solid 1px black" }}
      >
        <div className='row'>
          <div className='col-6'>
            <label className='form-label'>Valor</label>
            <CurrencyInput
              prefix='$'
              className='form-control'
              id='input-example'
              name='input-name'
              placeholder='Please enter a Value'
              defaultValue={1}
              decimalsLimit={2}
              onValueChange={(value) => setValue(value)}
            />
          </div>
          <div className='col-6'>
            <label className='form-label'>Data da cotação</label>
            <input type='text' className='form-control' />
          </div>

          <div className='col-6'>
            <label className='form-label'>Converter de </label>
            <select
              name='de'
              className='form-select'
              onChange={(e) => handleChange(e)}
            >
              {data
                ? data.map((item) => {
                    return (
                      <>
                        <option key={item.id} value={item.id}>
                          {item.currencyName} ({item.id})
                        </option>
                      </>
                    );
                  })
                : null}
            </select>
          </div>

          <div className='col -6'>
            <label className='form-label'>para</label>
            <select
              name='para'
              className='form-select'
              onChange={(e) => handleChange(e)}
            >
              {data
                ? data.map((item) => {
                    return (
                      <>
                        <option key={item.id} value={item.id}>
                          {item.currencyName} ({item.id})
                        </option>
                      </>
                    );
                  })
                : null}
            </select>
          </div>
        </div>

        <button
          onClick={() => {
            calculation();
          }}
          type='button'
          className='btn btn-primary'
        >
          <span>
            <i className='fas fa-redo-alt'></i>
          </span>
        </button>
      </form>
    </>
  );
}
