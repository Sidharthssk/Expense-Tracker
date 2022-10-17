import React from "react";
import Card from "./Card";
import ExpenseContainer from "./ExpenseContainer";

function Home() {
  return (
    <>
      <div className="container-md ">
        <div className="row d-flex align-items-sm-stretch align-items-md-center ">
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <ExpenseContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
