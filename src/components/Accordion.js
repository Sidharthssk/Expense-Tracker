import React from "react";
import moment from "moment"
import Listgroup from "./Listgroup";

function Accordion(props) {
    
  const {expense_tag, amount, date, index} = props;
  const formatedDate = moment(date).format('DD-MM-YYYY (dddd)');

  return (
    <div className="my-3">
      <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header" id={`heading${index}`}>
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#collapse${index}`}
              aria-expanded="true"
              aria-controls={`#collapse${index}`}
            >
              {formatedDate}
            </button>
          </h2>
          <div
            id={`#collapse${index}`}
            className="accordion-collapse collapse show"
            aria-labelledby={`heading${index}`}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              {expense_tag.map((item,index)=>{
                return <Listgroup expense={item} amount={amount[index]} key={index}/>
              })}
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Accordion;
