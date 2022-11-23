import React from "react";

function Alert(props) {
  return (
    <>
    {props.alert && props.user && <div class="alert alert-danger alert-dismissible fade show mx-2" role="alert">
      <strong>{`Hey ${props.user}!`}</strong> You have exceeded your monthly limit
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>}
    </>
  );
}

export default Alert;
