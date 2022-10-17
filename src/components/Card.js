import React, {useContext} from "react";
import ExpenseInput from "./ExpenseInput";
import ExpenseContext from "../context/expenseContext";


function Card() {

    const context = useContext(ExpenseContext);
    const {addExpenseTag} = context;

    const handleClick = (e) =>{
        e.preventDefault();
        addExpenseTag()
    }

  return (
    <>
      <div className="card my-3" >
        <h3 className="card-header">Enter Today's Expense</h3>
        <div className="card-body">
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
              <button type="button" className="btn btn-success">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
