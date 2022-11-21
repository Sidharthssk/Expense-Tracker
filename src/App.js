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

function App() {
  return (
    <>
    <ExpenseState>
      <UserState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
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
