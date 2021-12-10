import React from "react";

import "./style.css";

export default function Header({ text }) {
  return (
    <section>
      <div className='container d-flex justify-content-center mt-4 containerHeader'>
        <h1>{text}</h1>
      </div>
    </section>
  );
}
