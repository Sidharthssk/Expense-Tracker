import React from "react";
import {Link, useNavigate} from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleLogout = ()=>{
    localStorage.removeItem('authToken');
    navigate('/login');
  }

  return (
    <div style={{height: "10%"}}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Expense-Tracker
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('authToken')?<form className="d-flex" role="search">
            <Link className="btn btn-primary mx-2" role="button" to="/login">Login</Link>
            <Link className="btn btn-primary mx-2" role="button" to="/signup">Sign Up</Link>
            </form>:<button className="btn btn-primary" role="button" onClick={handleLogout}>Log Out</button>}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
