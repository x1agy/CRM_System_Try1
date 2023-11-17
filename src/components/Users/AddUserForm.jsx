import { FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { styleForAddUserFormTextFields, styleForAddUserFormFormControl } from "../Consts/StyleConstants/UsersConsts/AddUserFormStyleConsts";

function AddUserForm( {addUserToData} ){
    const [userPosition, setUserPosition] = useState("");
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [userDescription, setUserDescription] = useState("");

    const [formError, setFormError] = useState("none")
    const [buttonDisabled, setButtonDisabled] = useState(true)

    useEffect(() => {
        if(userMail.length < 1) setFormError("none")
        else if(userMail.search(/^[A-z]+@[a-z]+\.[a-z]{2,3}$/) === -1){
            setFormError("lightgoldenrodyellow")
        }else {
            setFormError("none")
        }
    }, [userMail])

    useEffect(() => {
        if(!userName || (userMail.search(/^[A-z]+@[a-z]+\.[a-z]{2,3}$/) === -1) || !userPosition || !userDescription){
            setButtonDisabled(true)
        }
        else{
            setButtonDisabled(false)
        }
    }, [userPosition, userDescription, userName, userMail])

    function makeUser(){
        const user = {
            name: userName,
            mail: userMail,
            userImage: userAvatar,
            position: userPosition,
            description: userDescription,
        }
        addUserToData(user)
        setUserName("");
        setUserPosition("");
        setUserAvatar("");
        setUserDescription("");
        setUserMail("");
}

    return(
        <>
            <FormControl
                sx={styleForAddUserFormFormControl}
            >
                <InputLabel >Person position</InputLabel>
                <Select
                    label="Person position"
                    sx={styleForAddUserFormTextFields}
                    value={userPosition}
                    onChange={(e) => setUserPosition(e.target.value)}
                    >
                    <MenuItem value={"Recruter"}>Recruter</MenuItem>
                    <MenuItem value={"Developer"}>Developer</MenuItem>
                    <MenuItem value={"Admin"}>Admin</MenuItem>
                </Select>
                <TextField
                    label="Person name" variant="outlined"
                    onChange={(e) => setUserName(e.target.value)}
                    sx={styleForAddUserFormTextFields}
                    value={userName}
                ></TextField>
                <TextField
                    label="Person mail" variant="outlined"
                    onChange={(e) => setUserMail(e.target.value)}
                    sx={{
                        mb:"20px",
                        bgcolor:formError,
                        transition:"0.3s"
                    }}
                    value={userMail}
                ></TextField>
                <TextField
                    label="Person avatar" variant="outlined"
                    onChange={(e) => setUserAvatar(e.target.value)}
                    sx={styleForAddUserFormTextFields}
                    value={userAvatar}
                ></TextField>
                <TextField
                    label="Person description" variant="outlined"
                    onChange={(e) => setUserDescription(e.target.value)}
                    sx={styleForAddUserFormTextFields}
                    value={userDescription}
                ></TextField>
                <Button 
                    variant="contained"
                    onClick={makeUser}
                    disabled={buttonDisabled}
                    sx={styleForAddUserFormTextFields}
                >
                    
                    Add user to Data
                </Button>
            </FormControl>
        </>
    )
}

export default AddUserForm;