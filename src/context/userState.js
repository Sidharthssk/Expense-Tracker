import UserContext from "./userContext";
import { useState } from "react";

const UserState = (props) =>{
    const [user, setUser] = useState();
    const host = process.env.REACT_APP_HOST;

    const [isAuthenticated, setAuthentication] = useState(false);

    const getUserData = async() =>{
        const response = await fetch(`${host}${process.env.REACT_APP_FETCHUSERDATA}`,{
            method: "POST",
            headers: {
                'Content-Type': "application/json",
                "auth-token": localStorage.getItem('authToken')
            },
        });

        const json = await response.json();
        setUser(json);
    }

    const editUserData = async(name, email,expenseLimit, emailList) =>{
        const response = await fetch(`${host}${process.env.REACT_APP_EDITUSERDATA}`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "auth-token": localStorage.getItem('authToken')
            },
            body: JSON.stringify({name, email,expenseLimit, emailList})
        });

        const json = await response.json();
        setUser(json);
    }

    return (
        <UserContext.Provider value={{user, getUserData, editUserData, isAuthenticated, setAuthentication}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;