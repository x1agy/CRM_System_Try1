import React from "react";
import { AppBar, Button, Typography, TextField, Link} from "@mui/material";
function Header({setFilterWord}){
    return(
        <AppBar
            sx={{
                flexDirection:"column",
                bgcolor:"lightblue"
            }}
        >
            <TextField
                sx={{
                    width:300,
                    position:"absolute",
                    mt:"7px",
                    ml:"32px"
                }}
                id="standard-basic"
                label="FIND PERSON"
                variant="standard"
                onChange={(e) => setFilterWord(e.target.value)}
                
            >

            </TextField>
            
            <Link
                href="/AddUserToData"
                sx={{
                    ml: "auto"
                }}
            >
                <Button
                    variant="outlined"
                    sx={{
                        width:"300px",
                        color:"white",
                        m: "20px",
                        
                    }}
                >
                    <Typography 
                        variant="body"
                        sx={{
                            color:"black",
                        }}
                    >Add person to DT</Typography>
                    
                </Button>
            </Link>
        </AppBar>
    )
}

export default Header;