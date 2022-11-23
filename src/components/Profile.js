import React, { useContext, useEffect, useState } from "react";
import userContext from "../context/userContext";

function Profile() {
  const context = useContext(userContext);
  const { user, getUserData, editUserData } = context;
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    expenseLimit: "",
    emailList: [],
  });

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (user) {
      setUserInfo({
        name: user.name,
        email: user.email,
        expenseLimit: user.expenseLimit,
        emailList: user.emailList,
      });
    }

  }, [user]);

  const handleEmail = () => {
    document.querySelector(".add-email").className =
      "form-control w-50 d-inline add-email";
  };

  const handleSave = () => {
    const additionalEmail = document.querySelector(".add-email").value;
    const emailList = user.emailList;
    if(additionalEmail){
      emailList.push(additionalEmail);
    }
    editUserData(userInfo.name, userInfo.email,userInfo.expenseLimit, emailList);
    getUserData();
  };

  const onChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };

  return (
    <div className="container text-bg-light p-5 my-4 rounded">
      <form action="">

      <div className="mb-3 row">
        <label htmlFor="exampleFormControlInput1" className="form-label col">
          Name
        </label>
        <input
          type="name"
          className="form-control col"
          id="name"
          placeholder="Name"
          onChange={onChange}
          name="name"
          value={userInfo.name}
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="exampleFormControlInput1" className="form-label col " >
          Email
        </label>
        <input
          type="email"
          className="form-control col"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={onChange}
          name="email"
          value={userInfo.email}
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="exampleFormControlInput1" className="form-label col">
          Expense Limit
        </label>
        <input
          type="name"
          className="form-control col"
          id="name"
          placeholder="Name"
          onChange={onChange}
          name="expenseLimit"
          value={userInfo.expenseLimit}
        />
      </div>
      <div className="mb-3 row">
        <label htmlFor="FormControlInput3" className="form-label col" style={{"marginBottom": 0, "display": "flex", "alignItems": "center"}}>
          Email List
        </label>
            
        <div className="dropdown col" style={{"paddingLeft": 0}}>
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Email List
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {userInfo.emailList.map((email, index) => (
              <li key={index} className="dropdown-item">
                {email}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col d-flex h-50 my-5 justify-content-between">
        <button
          type="button"
          className="btn btn-primary "
          onClick={handleEmail}
        >
          + Email
        </button>
        <input
          type="email"
          className="form-control w-50 d-none add-email"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        ></input>
        <button type="submit" className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      </div>
      </form>
    </div>
  );
}

export default Profile;
