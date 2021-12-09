import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../providers/index";

export default function NavBar() {
  const { title } = useContext(AuthContext);

  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='#'>
            <i
              className='fas fa-money-bill-alt '
              style={{ fontSize: "2rem" }}
            ></i>
            <span className='m-3'>{title}</span>
          </Link>
        </div>
      </nav>
    </>
  );
}
