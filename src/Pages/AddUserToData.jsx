import React from "react";
import Header from "../Components/Headers/HeaderForAddUserToData";
import AddUserForm from "../Components/Users/AddUserForm";

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