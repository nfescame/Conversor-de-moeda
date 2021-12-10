import React from "react";
import "./style.css";
export default function Card(props) {
  const { country1, inputValue, country2, calculation } = props;
  return (
    <>
      <div className='container p-3 mt-2 mb-2 cardContainer'>
        <p>
          <b>Conersão de: </b>
          {country1[1]}
        </p>
        <p>
          <b>Valor a converter: </b>${inputValue},00
        </p>
      </div>

      <div className='container p-3 mt-4 mb-4 cardContainer'>
        <p>
          <b>Para: </b>
          {country2[1]}
        </p>
        <p>
          <b>Resultado da conversão: </b>${calculation()}
        </p>
      </div>
    </>
  );
}
