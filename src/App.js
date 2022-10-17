import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ExpenseState from './context/expenseState';

function App() {
  return (
    <>
    <ExpenseState>
      <Navbar />
      <Home />
    </ExpenseState>
    </>
  );
}

export default App;
