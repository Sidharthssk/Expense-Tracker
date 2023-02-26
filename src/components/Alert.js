import React from "react";

function Alert(props) {

  function handleClose(){
    props.onClose();
  }

  return (
    <>
    {props.alert && props.user && <div className="alert alert-danger alert-dismissible fade show mx-2" role="alert">
      <strong className="text-capitalize">{`Hey ${props.user}!`}</strong> You have exceeded your monthly limit
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={handleClose}
      ></button>
    </div>}
    </>
  );
}

export default Alert;
