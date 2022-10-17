import React from 'react'
import Accordion from './Accordion'

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
      
  return (
    <>
      <div className="card my-3 mx-3">
        <h2 className="card-header text-center">{monthName} month's Expenses</h2>
        <div className="card-body">
            <Accordion />
        </div>
        
      </div>
    </>
  )
}

export default ExpenseContainer
