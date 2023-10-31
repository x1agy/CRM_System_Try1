import React, { useState } from "react";
import { Box, Snackbar, Alert, Modal, TextField, MenuItem, Select, FormControl, InputLabel, Button } from "@mui/material";
import {styleForUserModal, styleForUserEmail, styleForUserDeleteButton, styleForUserPosition, styleForUserDescription, styleForUserNameInModal, styleForUserReturnButton, styleForCloseIcon} from "../../Consts/StyleConstants/UsersConsts/UserCardStyleConsts";
import CloseIcon from '@mui/icons-material/Close';

function EditModal({name, mail, position, description, id, deleteUser, editUser, open, handleClose}){

    const [descriptionValue, setDescriptionValue] = useState(description);
    const [nameValue, setNameValue] = useState(name);
    const [mailValue, setMailValue] = useState(mail);

    function changeInfo(id, userName, value){
        editUser(id,userName,value);
        showAlert();
    }


    const [openAlert, setOpenAlert] = useState(false);
    const showAlert = () => {
      setOpenAlert(true);
    };
    const handleCloseAlert = () => {
      setOpenAlert(false);
    };

    return(
            <Modal
                open={open}
                onClose={handleClose}

            >
                <Box sx={styleForUserModal}>
                    <TextField
                        sx={styleForUserNameInModal}
                        value={nameValue}
                        onChange={(e) => setNameValue(e.target.value)}
                        onBlur={() => changeInfo(id, "name", nameValue)}
                        
                    >{name}</TextField>
                    <br />

                    <TextField
                        sx={styleForUserEmail}
                        value={mailValue}
                        
                        onChange={(e) => setMailValue(e.target.value)}
                        onBlur={() => changeInfo(id, "mail", mailValue)}
                    >{mail}</TextField>
                    <br />

                    <FormControl>
                        
                        <Select
                            sx={styleForUserPosition}
                            value={position}
                            onChange={(e) => changeInfo(id, "position", e.target.value)}
                        >
                        <MenuItem value={"Admin"}>Admin</MenuItem>
                        <MenuItem value={"Developer"}>Developer</MenuItem>
                        <MenuItem value={"Trainee"}>Trainee</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField 
                        sx={styleForUserDescription}
                        value={descriptionValue}
                        multiline
                        rows={10}
                        onChange={(e) => setDescriptionValue(e.target.value)}
                        onBlur={() => changeInfo(id, "description", descriptionValue)}
                    >sadfasdf</TextField>
                    
                    <Button
                        sx={styleForUserDeleteButton}
                        onClick={() => deleteUser(id)}
                    >Delete</Button>
                    
                    <Button
                        sx={styleForUserReturnButton}
                        variant="outlined"
                        onClick={() => handleClose()}
                    >Return</Button>

                    <Snackbar 
                        open={openAlert} 
                        autoHideDuration={2000} 
                        onClose={handleCloseAlert
                    }>
                        <Alert 
                            onClose={handleCloseAlert} 
                            severity="success" 
                        >
                        
                        Success!</Alert>
                    </Snackbar>

                    <CloseIcon
                        sx={styleForCloseIcon}
                        onClick={() => handleClose()}
                    />
                </Box>
            </Modal>
    )
}
export default EditModal