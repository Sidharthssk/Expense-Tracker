import React, {useEffect,useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import userContext from "../context/userContext";

function Navbar() {
  const navigate = useNavigate();
  const context = useContext(userContext);
  let {user, getUserData} = context;

  const handleLogout = ()=>{
    localStorage.removeItem('authToken');
    navigate('/login');
  }

  useEffect(()=>{
    if(localStorage.getItem('authToken')){
      getUserData();
    }
    // eslint-disable-next-line
  },[localStorage.getItem('authToken')]);

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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/expenseViewer">
                  Expense-Viewer
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/visualizeExpense">
                  Line Chart
                </Link>
              </li>
            </ul>
            {!localStorage.getItem('authToken')?<form className="d-flex" role="search">
            <Link className="btn btn-primary mx-2" role="button" to="/login">Login</Link>
            <Link className="btn btn-primary mx-2" role="button" to="/signup">Sign Up</Link>
            </form>:<button className="btn btn-primary" role="button" onClick={handleLogout}>Log Out</button>}

            {localStorage.getItem('authToken') && user && <div className="d-flex align-items-center">
            <Link to="/profile" type="button" className="btn btn-primary mx-2 rounded-circle">{user.name[0]}</Link>
            </div>}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
