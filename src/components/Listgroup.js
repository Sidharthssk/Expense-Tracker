import React from "react";

function Listgroup(props) {
  return (
    <div>
      <ul className="list-group list-group-horizontal text-center">
        <li className="list-group-item flex-fill" style={{width: "50%"}}>{props.expense}</li>
        <li className="list-group-item flex-fill" style={{width: "50%"}}>{props.amount} &#x20b9;</li>
      </ul>
    </div>
  );
}

export default Listgroup;
