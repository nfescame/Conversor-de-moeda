import React, { useContext } from "react";

import { AuthContext } from "../../providers";

export default function SelectComponent(props) {
  const { setSelect1, setSelect2, setCountry1, setCountry2 } =
    useContext(AuthContext);
  const { countrys, symbols, text, name, setResult } = props;

  function changeSelect(e) {
    const symb = e.target.value.split(" ", 1);
    const country = e.target.value.split(3);

    if (e.target.name === "de") {
      setSelect1(symb);
      setCountry1(country);
    } else {
      setSelect2(symb);
      setCountry2(country);
    }
    setResult(0);
  }
  return (
    <>
      <div className='col-md-4'>
        <label className='form-label' style={{ color: "red" }}>
          {text}
        </label>
        <select
          name={name}
          className='form-select'
          onChange={(e) => {
            changeSelect(e);
          }}
        >
          {symbols.map((item, index) => {
            return (
              <option key={index} value={item + " " + countrys[index]}>
                {item} {countrys[index]}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
}
