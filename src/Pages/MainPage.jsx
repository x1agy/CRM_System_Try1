import React from "react";
import { Box } from "@mui/material";
import ShowUsers from "../Components/Users/ShowUsersOnPage";
import Header from "../Components/Headers/HeaderForMainPage";

function MainPage( {filteredUsers, setFilterWord, deleteUser, editUser} ){

    const styleForBox = {
        mt:"100px",
        display:"flex",
        flexWrap:"wrap"
    }

    return(
        <> 
            <Header 
                setFilterWord={(word) => setFilterWord(word)}
            />
            <Box
                sx={styleForBox}
            >
                <ShowUsers 
                    filteredUsers={filteredUsers}
                    deleteUser={(i) => deleteUser(i)}
                    editUser={(id, key, value) => editUser(id, key, value)} 
                />
            </Box>
        </>

    )
} 
export default MainPage; 