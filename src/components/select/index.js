import React, { useContext } from "react";

import { AuthContext } from "../../providers";

export default function SelectComponent(props) {
  const { setSelect1, setSelect2, setCountry1, setCountry2 } =
    useContext(AuthContext);
  const { symbols, text, name, setResult } = props;

  function changeSelect(e) {
    const symb = e.target.value.split(",", 1);
    const country = e.target.value.split(",");

    console.log(symb[0]);

    if (e.target.name === "de") {
      setSelect1(symb[0]);
      setCountry1(country);
    } else {
      setSelect2(symb[0]);
      setCountry2(country);
    }
    setResult(0);
  }
  return (
    <>
      <div className='col-md-4'>
        <label className='form-label' style={{ color: "#013F50" }}>
          {text}
        </label>
        <select
          name={name}
          className='form-select p-3'
          onChange={(e) => {
            changeSelect(e);
          }}
        >
          {symbols
            ? symbols.map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item[0]} ({item[1]})
                  </option>
                );
              })
            : null}
        </select>
      </div>
    </>
  );
}
