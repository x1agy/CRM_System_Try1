import { Box, Typography, Modal, Button, TextField, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import { DeleteForever } from "@mui/icons-material";
import {styleForUserModal, styleForUserCard, styleForUserNameInCard, styleForUserEmail, styleForUserDeleteButton, styleForUserPosition, styleForUserDescription, styleForUserNameInModal, styleForUserModalButton} from "../Consts/StyleConstants/UsersConsts/UserCardStyleConsts";

function UserCard( {name, mail, userImage, position, description, id, deleteUser, editUser} ){

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [descriptionValue, setDescriptionValue] = useState(description);
    const [nameValue, setNameValue] = useState(name);
    const [mailValue, setMailValue] = useState(mail);

    return(
        <Box 
            sx={styleForUserCard}
        >
            <Avatar 
                src={userImage} 
                alt={name}
            />
            <Typography
                sx={styleForUserNameInCard}
                variant="h6"
            >{name}</Typography>

            <Button 
                onClick={handleOpen}
                sx={styleForUserModalButton}
                variant="outlined"
            >About {name}</Button>
            
            <Modal
                open={open}
                onClose={handleClose}

            >
                <Box sx={styleForUserModal}>
                    <TextField
                        sx={styleForUserNameInModal}
                        value={nameValue}
                        variant="standard"
                        multiline
                        onChange={(e) => setNameValue(e.target.value)}
                        onBlur={() => editUser(id, "name", nameValue)}
                    >{name}</TextField>
                    <br />

                    <TextField
                        sx={styleForUserEmail}
                        value={mailValue}
                        variant="standard"
                        multiline
                        onChange={(e) => setMailValue(e.target.value)}
                        onBlur={() => editUser(id, "mail", mailValue)}
                    >{mail}</TextField>
                    <br />

                    <DeleteForever 
                        sx={styleForUserDeleteButton}
                        onClick={() => deleteUser(id)}
                    />

                    <FormControl>
                        <InputLabel 
                            sx={styleForUserPosition}
                        >position</InputLabel>
                        <Select
                            sx={styleForUserPosition}
                            value={position}
                            label="position"
                            onChange={(e) => editUser(id, "position", e.target.value)}
                        >
                        <MenuItem value={"Admin"}>Admin</MenuItem>
                        <MenuItem value={"Developer"}>Developer</MenuItem>
                        <MenuItem value={"Trainee"}>Trainee</MenuItem>
                        </Select>
                    </FormControl>

                    <TextField 
                        sx={styleForUserDescription}
                        value={descriptionValue}
                        variant="standard"
                        multiline
                        onChange={(e) => setDescriptionValue(e.target.value)}
                        onBlur={() => editUser(id, "description", descriptionValue)}
                    >sadfasdf</TextField>
                    
                </Box>
            </Modal>
            
        </Box>
    )
}
export default UserCard