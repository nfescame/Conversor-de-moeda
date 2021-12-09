import React, { useContext } from "react";

import { AuthContext } from "../../providers";

export default function SelectComponent(props) {
  const { setSelect1, setSelect2 } = useContext(AuthContext);
  const { country, symbols, text, name } = props;

  function changeSelect(e) {
    if (e.target.name === "de") {
      setSelect1(e.target.value);
    } else {
      setSelect2(e.target.value);
    }
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
          {symbols
            ? symbols.map((item, index) => {
                return (
                  <>
                    <option key={index} value={item}>
                      {item} {country[index]}
                    </option>
                  </>
                );
              })
            : null}
        </select>
      </div>
    </>
  );
}
