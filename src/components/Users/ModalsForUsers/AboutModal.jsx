import { Avatar, Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import { styleForUserAboutAvatar, styleForUserDescriptionAbout, styleForUserModal, styleForUserNameInAbout, styleForUserReturnButton, styleForUserEditButton, styleForCloseIcon } from "../../Consts/StyleConstants/UsersConsts/UserCardStyleConsts";
import CloseIcon from '@mui/icons-material/Close';

function AboutModal({name, mail, userImage, position, description, id, open, handleClose, handleOpenForEdit}){
    
    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box
                sx={styleForUserModal}
            >
                <Avatar
                    sx={styleForUserAboutAvatar}
                    src={userImage} 
                    alt={name}
                    variant="rounded"
                />
                <Typography
                    sx={styleForUserNameInAbout}
                    variant="h4"
                >{name}</Typography>

                <Typography><strong>Email: </strong>{mail}</Typography>
                <Typography><strong>Position: </strong>{position}</Typography>
                <Typography
                    sx={styleForUserDescriptionAbout}
                >{description}</Typography>

                <Button
                    sx={styleForUserEditButton}
                    onClick={() => handleOpenForEdit()}
                >Edit</Button>
                <Button
                    sx={styleForUserReturnButton}
                    variant="outlined"
                    onClick={() => handleClose()}
                >Close</Button>

                <CloseIcon
                    sx={styleForCloseIcon}
                    onClick={() => handleClose()}
                />
            </Box>
        </Modal>
    )
}

export default AboutModal