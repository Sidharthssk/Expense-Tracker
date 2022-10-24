import ExpenseContext from "./expenseContext";
import { useState } from "react";

const ExpenseState = (props) =>{

    let num = 1;
    const host = "http://localhost:8000";
    const [expense, setExpense] = useState([]);

    const component = `<div class="input-group">
    <span class="input-group-text w-sm-25 w-lg-50">Expense</span>
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
        'auth-token': localStorage.getItem('authToken')
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
        'auth-token': localStorage.getItem('authToken')
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