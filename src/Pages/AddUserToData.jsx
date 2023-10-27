import React from "react";
import Header from "../components/Headers/HeaderForAddUserToData";
import AddUserForm from "../components/Users/AddUserForm";

function AddUsersToData({addUserToData}){
    return(
        <>
            <Header />
            <AddUserForm
                addUserToData={(user) => addUserToData(user)}
            />
        </>
    )
}

export default AddUsersToData;