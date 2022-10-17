import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ExpenseState from './context/expenseState';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <ExpenseState>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </Router>
    </ExpenseState>
    </>
  );
}

export default App;
