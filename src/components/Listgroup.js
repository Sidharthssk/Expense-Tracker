import React from "react";

function Listgroup(props) {
  return (
    <div>
      <ul class="list-group list-group-horizontal text-center">
        <li class="list-group-item flex-fill" style={{width: "50%"}}>{props.expense}</li>
        <li class="list-group-item flex-fill" style={{width: "50%"}}>{props.amount} &#x20b9;</li>
      </ul>
    </div>
  );
}

export default Listgroup;
