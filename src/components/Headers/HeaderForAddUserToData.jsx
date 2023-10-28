import React from "react";
import { AppBar, Button, Typography, Link} from "@mui/material";
import { styleForFormHeaderAppBar, styleForFormHeaderButton, styleForFormHeaderLink } from "../Consts/StyleConstants/HeaderConsts/FormHeaderStyleConsts";

function Header(){

    return(
        <AppBar
            sx={styleForFormHeaderAppBar}
        >
            <Link
                href="/"
                sx={styleForFormHeaderLink}
            >
                <Button
                    variant="outlined"
                    sx={styleForFormHeaderButton}
                >
                    <Typography 
                        variant="body"
                    >Return to main page</Typography>
                    
                </Button>
            </Link>
        </AppBar>
    )
}
export default Header