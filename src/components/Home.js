import React from "react";
import Card from "./Card";
import ExpenseContainer from "./ExpenseContainer";

function Home() {
  return (
    <>
      <div className="container-md text-center" style={{height: "90%"}}>
        <h1 className="mt-3" id="mainHeading" style={{color: "white"}}>Welcome to Expense Tracker....</h1>
        <h3 className="my-3" style={{color: "white"}}>The place where you can keep a track of your expense efficiently</h3>
        <div className="row d-flex align-items-md-center justify-content-center " >
          <div className="col mx-lg-5 my-3">
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
