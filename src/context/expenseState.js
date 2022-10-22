import ExpenseContext from "./expenseContext";
import { useState } from "react";

const ExpenseState = (props) =>{

    let num = 1;
    const host = "http://localhost:8000";
    const [expense, setExpense] = useState([]);

    const component = `<div class="input-group">
    <span class="input-group-text">Expense-Amount</span>
    <input
      type="text"
      placeholder="Expense"
      aria-label="Expense"
      class="form-control Expense"
      name="expense+${num}"
    />
    <span class="input-group-text">${"\u20B9"}</span>
    <input
      type="text"
      placeholder="Amount"
      aria-label="Amount"
      class="form-control Amount"
      name="amount+${num}"
    />
  </div>`;

  const addExpenseTag = () => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = component;
    document.querySelector(".list-group").appendChild(li);
  };

  const addExpense = async(expense_tag, amount) => {
    const response = await fetch(`${host}/api/expense/dailyexpense`,{
      method: 'POST',
      headers: {
        'Content-Type': "application/json",
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0OGYyYzhkNjVlNTc5Yjk0NjY2ZTMwIn0sImlhdCI6MTY2NTc5NTg2OX0.0r97s-N2o92_WQbdRLZ8ekStRCVLTi5tbLbAJ8R9DjQ"
      },
      body: JSON.stringify({expense_tag, amount})
    });
    const json = await response.json();
    
    if(json.id){
      fetchExpenses();
    }else{
      setExpense(expense.concat(json));
    }
  }

  const fetchExpenses = async() =>{
    const response = await fetch(`${host}/api/expense/fetchdailyexpense`, {
      method: 'GET',
      headers: {
        'Content-Type': "application/json",
        'auth-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjM0OGYyYzhkNjVlNTc5Yjk0NjY2ZTMwIn0sImlhdCI6MTY2NTc5NTg2OX0.0r97s-N2o92_WQbdRLZ8ekStRCVLTi5tbLbAJ8R9DjQ"
      },
    });
    const json = await response.json();
    setExpense(json);
  }

  return (
    <ExpenseContext.Provider value={{addExpenseTag, addExpense, fetchExpenses, expense}}>
        {props.children}
    </ExpenseContext.Provider>
  );

}

export default ExpenseState;