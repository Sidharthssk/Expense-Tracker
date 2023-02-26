import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ExpenseState from './context/expenseState';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import HtmlToPdf from './components/HtmlToPdf';
import Profile from './components/Profile';
import UserState from './context/userState';
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [alert, setAlert] = useState(null);
  const [user, setUser] = useState(null);

  function alertClosed(){
    window.location.reload();
  }

  const showAlert = (user) =>{
    setAlert(true);
    setUser(user);
    setTimeout(() => {
      setAlert(null);
      setUser(null);
    }, 20000);
  }

  return (
    <>
    <ExpenseState>
      <UserState>
      <Router>
        <Navbar />
        <Alert alert={alert} user={user} onClose={alertClosed}/>
        <Routes>
          <Route exact path='/' element={<Home showAlert={showAlert}/>} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
          <Route exact path='/expenseViewer' element={<HtmlToPdf />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
      </Router>
      </UserState>
    </ExpenseState>
    </>
  );
}

export default App;
