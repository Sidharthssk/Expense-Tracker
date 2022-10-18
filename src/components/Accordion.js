import React from "react";
import moment from "moment"
import Listgroup from "./Listgroup";

function Accordion(props) {
    
  const {expense_tag, amount, date, index} = props;
  const formatedDate = moment(date).format('DD-MM-YYYY (dddd)');

  return (
    <>
        <div class="accordion-item">
    <h2 class="accordion-header" id={`heading${index}`}>
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`}aria-expanded="true" aria-controls={`collapse${index}`}>
        {formatedDate}
      </button>
    </h2>
    <div id={`collapse${index}`} class={`accordion-collapse collapse ${index === 0? "show":""}`} aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
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
