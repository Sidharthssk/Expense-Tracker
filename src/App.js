import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ExpenseState from './context/expenseState';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <>
    <ExpenseState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </ExpenseState>
    </>
  );
}

export default App;
