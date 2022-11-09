import React from "react";

function ExpenseInput() {
  return (
    <>
      <ul className="list-group list-group-flush">
        <li className="list-group-item expense-input">
          <div className="input-group">
            <span className="input-group-text w-sm-25 w-lg-50">Expense</span>
            <input
              type="text"
              placeholder="Expense"
              aria-label="Expense"
              className="form-control Expense"
              name="expense1"
            />
            <span className="input-group-text">&#x20b9;</span>
            <input
              type="text"
              placeholder="Amount"
              aria-label="Amount"
              className="form-control Amount"
              name="amount1"
            />
          </div>
        </li>
      </ul>
    </>
  );
}

export default ExpenseInput;
