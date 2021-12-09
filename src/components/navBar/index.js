import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='#'>
            <i
              className='fas fa-money-bill-alt '
              style={{ fontSize: "2rem" }}
            ></i>
            <span className='m-3'>Currency exchange</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
