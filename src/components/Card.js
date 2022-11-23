import React, {useContext} from "react";
import ExpenseInput from "./ExpenseInput";
import ExpenseContext from "../context/expenseContext";
import userContext from "../context/userContext";

function Card(props) {

    const context = useContext(ExpenseContext);
    const context1 = useContext(userContext);
    const {addExpenseTag, addExpense} = context;
    const {user, getUserData} = context1;
    const {showAlert} = props;
    let expense = [];
    let amount = [];

    const handleClick = (e) =>{
        e.preventDefault();
        addExpenseTag()
    }

    const handleSubmit = async(e) =>{

      e.preventDefault();
      
      document.querySelectorAll(".Expense").forEach(function (element) {
        expense.push(element.value);
      });
    
      document.querySelectorAll(".Amount").forEach(function (element) {
        amount.push(element.value);
      });

      addExpense(expense, amount);

      await getUserData();
      await user;
      if(user.totalExpense > user.expenseLimit){
        showAlert(user.name);
      }
      
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
