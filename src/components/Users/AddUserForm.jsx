import { Alert, FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { styleForAddUserFormAlert, styleForAddUserFormTextFields, styleForAddUserFormFormControl } from "../Consts/StyleConstants/UsersConsts/AddUserFormStyleConsts";

function AddUserForm( {addUserToData} ){
    const [userPosition, setUserPosition] = useState("");
    const [userName, setUserName] = useState("");
    const [userMail, setUserMail] = useState("");
    const [userAvatar, setUserAvatar] = useState("");
    const [userDescription, setUserDescription] = useState("");

    const [showAlert, setShowAlert] = useState(false);

    function makeUser(){
        const user = {
            name: userName,
            mail: userMail,
            userImage: userAvatar,
            position: userPosition,
            description: userDescription,
        }
        if(!userName || !userMail || !userPosition || !userDescription){
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 3000)
        }else{
            addUserToData(user)
            setUserName("");
            setUserPosition("");
            setUserAvatar("");
            setUserDescription("");
            setUserMail("");
        }
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
                    sx={styleForAddUserFormTextFields}
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
                    sx={styleForAddUserFormTextFields}
                >
                    
                    Add user to Data
                </Button>
            </FormControl>
            {showAlert && <Alert 
                        severity="error"
                        sx={styleForAddUserFormAlert}
                    >
                    Fill all fields!
                </Alert>
            }
        </>
    )
}

export default AddUserForm;