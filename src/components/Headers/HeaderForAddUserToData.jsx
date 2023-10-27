import React from "react";
import { AppBar, Button, Typography, Link} from "@mui/material";

function Header(){
    return(
        <AppBar
            sx={{
                flexDirection:"column",
                bgcolor:"lightblue",
                zIndex:"1"
            }}
        >
            <Link
                href="/"
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
                    >Return to main page</Typography>
                    
                </Button>
            </Link>
        </AppBar>
    )
}
export default Header