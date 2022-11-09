import React, {useContext} from "react";
import ExpenseInput from "./ExpenseInput";
import ExpenseContext from "../context/expenseContext";


function Card() {

    const context = useContext(ExpenseContext);
    const {addExpenseTag, addExpense} = context;
    let expense = [];
    let amount = [];

    const handleClick = (e) =>{
        e.preventDefault();
        addExpenseTag()
    }

    const handleSubmit = (e) =>{

      e.preventDefault();
      
      document.querySelectorAll(".Expense").forEach(function (element) {
        expense.push(element.value);
      });
    
      document.querySelectorAll(".Amount").forEach(function (element) {
        amount.push(element.value);
      });

      addExpense(expense, amount);
      
      // Delete all the input fields
      document.querySelectorAll(".expense-input").forEach(function (element) {
        element.remove();
      });

      addExpenseTag();
    }

  return (
    <form >
      <div className="card" >
        <h3 className="card-header">Enter Today's Expense</h3>
        <div className="card-body ">
          <ExpenseInput />
        </div>
        <div className="card-footer">
          <div className="row text-center">
            <div className="col-6">
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Add Expense
              </button>
            </div>
            <div className="col-6">
              <button type="submit" className="btn btn-success" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Card;
