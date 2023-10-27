import React from "react";
import { Box } from "@mui/material";
import ShowUsers from "../components/Users/ShowUsersOnPage";
import Header from "../components/Headers/HeaderForMainPage";

function MainPage( {filteredUsers, setFilterWord, deleteUser} ){

    return(
        <> 
            <Header 
                setFilterWord={(word) => setFilterWord(word)}
            />
            <Box
                sx={{
                    mt:"100px",
                    display:"flex",
                    flexWrap:"wrap"
                }}
            >
                <ShowUsers 
                    filteredUsers={filteredUsers}
                    deleteUser={(i) => deleteUser(i)} 
                />
            </Box>
        </>

    )
} 
export default MainPage; 