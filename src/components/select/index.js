import React from "react";

export default function SelectComponent(props) {
  const { setSelect, state, text, name } = props;
  return (
    <>
      <div className='col-12'>
        <label className='form-label'>{text}</label>
        <select
          name={name}
          className='form-select'
          onClick={(e) => {
            setSelect(e.target.value);
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
    </>
  );
}
