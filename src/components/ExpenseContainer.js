import React, {useContext, useEffect} from 'react'
import Accordion from './Accordion'
import expenseContext from '../context/expenseContext';
import {useNavigate} from 'react-router-dom';

function ExpenseContainer() {

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let monthIndex = new Date().getMonth();
      let monthName = monthNames[monthIndex];

      const context = useContext(expenseContext);
      const {fetchExpenses, expense} = context;
      const navigate = useNavigate();

      useEffect(()=>{
        if(localStorage.getItem('authToken')){
          fetchExpenses();
        }
        else{
          navigate('/login')
        }
        // eslint-disable-next-line
      },[])
      
  return (
    <>
      <div className="card my-5 expenseCard">
        <h2 className="card-header text-center">{monthName} month's Expenses</h2>
        <div className="card-body">
          <div className="accordion" id="accordionExample">
            {expense.map((item,index) => {
              return <Accordion date={item.date} expense_tag={item.expenses.expense_tag} amount={item.expenses.amount} index={index} key={item._id} />
            })}
          </div>
        </div>
        <div className="card-footer">
          
        </div>
      </div>
    </>
  )
}

export default ExpenseContainer
