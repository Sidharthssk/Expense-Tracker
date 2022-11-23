import React from "react";
import moment from "moment"
import Listgroup from "./Listgroup";

function Accordion(props) {
    
  const {expense_tag, amount, date, index} = props;
  const formatedDate = moment(date).format('DD-MM-YYYY (dddd)');

  let sum = 0;
  for(let i=0;i<amount.length;i++) sum+=amount[i];

  return (
    <>
    <div className="accordion-item">
    <h2 className="accordion-header" id={`heading${index}`}>
      <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}aria-expanded="true" aria-controls={`collapse${index}`}>
        <div className="container d-flex justify-content-between">
        <div>{formatedDate}</div>
        <div>{sum} &#x20b9;</div>
        </div>
      </button>
    </h2>
    <div id={`collapse${index}`} className={`accordion-collapse collapse ${index === 0? "show":""}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body">
        {expense_tag.map((item,index)=>{
          return <Listgroup expense={item} amount={amount[index]} key={index}/>
        })}
      </div>
    </div>
  </div>
    </>
  );
}

export default Accordion;
