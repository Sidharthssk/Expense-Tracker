import ExpenseContext from "./expenseContext";

const ExpenseState = (props) =>{

    let num = 1;

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

  return (
    <ExpenseContext.Provider value={{addExpenseTag}}>
        {props.children}
    </ExpenseContext.Provider>
  );

}

export default ExpenseState;