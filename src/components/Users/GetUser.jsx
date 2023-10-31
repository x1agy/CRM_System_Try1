import { Box, Typography, Button } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React, { useState } from "react";
import { styleForUserCard, styleForUserNameInCard, styleForUserModalButton } from "../Consts/StyleConstants/UsersConsts/UserCardStyleConsts";
import EditModal from "./ModalsForUsers/EditModal";
import AboutModal from "./ModalsForUsers/AboutModal";

function UserCard( {name, mail, userImage, position, description, id, deleteUser, editUser} ){

    const [openForAboutModal, setOpenForAboutModal] = useState(false);
    const handleOpenForAbout = () => setOpenForAboutModal(true);
    
    const handleCloseEdit = () => {
        setOpenForEditModal(false)
    }
    const handleCloseAbout = () => {
        setOpenForAboutModal(false)
    }
    

    const [openForEditModal, setOpenForEditModal] = useState(false);
    const handleOpenForEdit = () => setOpenForEditModal(true);


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
                onClick={handleOpenForAbout}
                sx={styleForUserModalButton}
                variant="outlined"
            >About {name}</Button>
            <EditModal 
                name={name}
                mail={mail}
                position={position}
                description={description}
                id={id}
                deleteUser={(i) => deleteUser(i)}
                editUser={(id, key, value) => editUser(id, key, value)}
                open={openForEditModal}
                handleClose={() => handleCloseEdit()}
            />

            <AboutModal 
                name={name}
                mail={mail}
                position={position}
                description={description}
                id={id}
                userImage={userImage}
                open={openForAboutModal}
                handleClose={() => handleCloseAbout()}
                handleOpenForEdit={() => handleOpenForEdit()}
            />
            
        </Box>
    )
}
export default UserCard