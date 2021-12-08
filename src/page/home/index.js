import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";
import { AuthContext } from "../../providers/index";
import { listquotes, midlle, exchange } from "../../apis/api";

export default function Home() {
  const { data } = useContext(AuthContext);
  const [paramsState, setParamsState] = useState({
    params: { from: "USD", to: "BRL", q: "1.0" },
  });
  const [state, setState] = useState();
  const [value, setValue] = useState(1);

  // params: { from: "SGD", to: "MYR", q: "1.0" },
  const [select1, setSelect1] = useState("BRL");
  const [select2, setSelect2] = useState("USD");

  useEffect(() => {
    const options = Object.assign(listquotes, midlle);
    axios
      .request(options)
      .then(function (res) {
        setState(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClick() {
    const options = Object.assign(exchange, paramsState, midlle);
    axios
      .request(options)
      .then(function (res) {
        setValue(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  function handleChange(e) {
    if (e.target.name === "de") {
      setSelect1(e.target.value);
    } else {
      setSelect2(e.target.value);
    }
    console.log(select1, select2);
  }

  return (
    <>
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
              onChange={(e) => {
                handleChange(e);
              }}
            >
              {state
                ? state.map((item, index) => {
                    return (
                      <>
                        <option key={index} value={item}>
                          {item}
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
              onChange={(e) => {
                handleChange(e);
              }}
            >
              {state
                ? state.map((item, index) => {
                    return (
                      <>
                        <option key={index} value={item}>
                          {item}
                        </option>
                      </>
                    );
                  })
                : null}
            </select>
          </div>
        </div>

        <button type='button' className='btn btn-primary' onClick={handleClick}>
          <span>
            <i className='fas fa-redo-alt'></i>
          </span>
        </button>
      </form>
    </>
  );
}
