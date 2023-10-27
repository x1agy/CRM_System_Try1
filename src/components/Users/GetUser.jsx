import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";
import { DeleteForever, ExpandMore } from "@mui/icons-material";

function UserCard( {name, mail, image, position, description, id, deleteUser} ){
    const textSize = name.length > 12 ? "10px" : "20px";
    return(
        <Box 
            sx={{
                p: "20px",
                m: "20px",
                height: "fit-content",
                bgcolor: "lightcyan",
                width: "250px",
                display: "flex",
                flexDirection: "column",
                position: "relative"
            }}
        >
            <Avatar alt={name + " avatar"} src={image} />

            <Typography
                sx={{
                    position: "absolute",
                    ml: "50px",
                    fontSize: textSize
                }}
                variant="h6"
            >{name}</Typography>

            <Typography
                sx={{
                    mt: "10px"
                }}
                variant="h6"
            >{mail}</Typography>

            <Button
                sx={{
                    width: "1px",
                    position: "absolute",
                    ml: "200px",
                    zIndex: "1",
                    padding: "0px",
                    mt: "5px"
                }}
                variant="contained"
                onClick={() => deleteUser(id)}
            >
                <DeleteForever/>
            </Button>

            <Typography
                sx={{
                    mb: "10px"
                }}
                variant="h6"
            >position: {position}</Typography>

            <Accordion

            >
                <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                >
                    <Typography>About {name}</Typography>
                </AccordionSummary>

                <AccordionDetails>
                    <Typography 
                        sx={{
                            wordWrap: "break-word"
                        }}
                        variant="p"
                    >{description}</Typography>
                </AccordionDetails>

            </Accordion>

            
            
        </Box>
    )
}
export default UserCard