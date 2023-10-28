import React from "react";
import { AppBar, Button, Typography, TextField, Link} from "@mui/material";
import { styleForMainHeaderAppBar, styleForMainHeaderButton, styleForMainHeaderLink, styleForMainHeaderTextField } from "../Consts/StyleConstants/HeaderConsts/MainHeaderStyleConsts";
function Header({setFilterWord}){
    
  
    return(
        <AppBar
            sx={styleForMainHeaderAppBar}
        >
            <TextField
                sx={styleForMainHeaderTextField}
                id="standard-basic"
                label="SEARCH"
                variant="standard"
                onChange={(e) => setFilterWord(e.target.value)}
                
            >

            </TextField>
            
            <Link
                href="/AddUserToData"
                sx={styleForMainHeaderLink}
            >
                <Button
                    variant="outlined"
                    sx={styleForMainHeaderButton}
                >
                    <Typography 
                        variant="body"
                        
                    >Add Employee</Typography>
                    
                </Button>
            </Link>

        </AppBar>
    )
}

export default Header;