import { Alert, FormControl, InputLabel, MenuItem, Select, TextField, Button } from "@mui/material";
import React, { useState } from "react";

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
        console.log(user)
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
                sx={{
                    mt:"100px",
                    display:"flex",
                    flexDirection:"column",

                }}
            >
                <InputLabel >Person position</InputLabel>
                <Select
                    label="Person position"
                    sx={{
                        mb:"20px"
                    }}
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
                    sx={{
                        mb:"20px"
                    }}
                    value={userName}
                ></TextField>
                <TextField
                    label="Person mail" variant="outlined"
                    onChange={(e) => setUserMail(e.target.value)}
                    sx={{
                        mb:"20px"
                    }}
                    value={userMail}
                ></TextField>
                <TextField
                    label="Person avatar" variant="outlined"
                    onChange={(e) => setUserAvatar(e.target.value)}
                    sx={{
                        mb:"20px"
                    }}
                    value={userAvatar}
                ></TextField>
                <TextField
                    label="Person description" variant="outlined"
                    onChange={(e) => setUserDescription(e.target.value)}
                    sx={{
                        mb:"20px"
                    }}
                    value={userDescription}
                ></TextField>
                <Button 
                    variant="contained"
                    onClick={makeUser}
                    sx={{
                        mb:"20px"
                    }}
                >
                    
                    Add user to Data
                </Button>
            </FormControl>
            {showAlert && <Alert 
                        severity="error"
                        sx={{
                            position:"absolute",
                            top:"1",
                            zIndex:"2",
                            width:"99.2%",
                            p:"0",
                            m:"0"
                        }}
                    >
                    Fill all fields!
                </Alert>
            }
        </>
    )
}

export default AddUserForm;