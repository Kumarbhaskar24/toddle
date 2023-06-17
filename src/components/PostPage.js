import { Box, Typography, Stack, TextField } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import { Button } from '@mui/material';
import { useState } from "react";
import { Link } from 'react-router-dom';
const CreateNewBoard = () => {
    return (
        <Box justifyContent="center" display="flex" alignItems="center" height="100vh" 
        sx={{
            backgroundSize: "cover",
        }}
        >
            <Box
                height="55vh"
                width="70vh"
                borderRadius={3}
                sx={{ backgroundColor: "whitesmoke" }}>
                <Stack direction={"row"}>
                    <Typography variant='h5' sx={{ ml: 4, mr: 2, mt: 3 }}>
                        <b>Add a name for your board</b>
                    </Typography>
                    <IconButton
                        sx={{ ml: 15, mt: 2, mr: 1 }}
                        component={Link}
                        to="/"
                        >
                        <CloseIcon />
                    </IconButton>
                </Stack>
                <TextField
                    id="outlined-basic" label="Add Name" variant="outlined"
                    sx={{ mt: 3, ml: 4, width: "50ch" }}
                >
                </TextField>
                <Typography variant='h5' sx={{ ml: 4, mr: 2, mt: 5 }}>
                    <b>Select Post Color</b>
                </Typography>
                <Typography variant='h7' sx={{ ml: 4 }}>
                    Here are some templates to help you get started
                </Typography>

                <Stack direction="row" spacing={2} sx={{mt:5,ml:4}}>
                    <Button variant='outlined' size='small' sx={{backgroundColor: "#A7F0F9", borderRadius: "100%", width: "24.05px",height: "24.05px"}}></Button>
                    <Button variant='outlined' size='small' sx={{ backgroundColor: "#C5C5FC", borderRadius: "100%",width: "24.05px",height: "24.05px" }}></Button>
                    <Button variant='outlined' size='small' sx={{ backgroundColor: "#FFAEC0", borderRadius: "100%", width: "24.05px",height: "24.05px" }}></Button>
                    <Button variant='outlined' size='small' sx={{ backgroundColor: "#FFCC66", borderRadius: "100%", width: "24.05px",height: "24.05px" }}></Button>
                </Stack>
                <Stack direction={"row"} sx={{mt:9,justifyContent:"right"}}>
                <Button variant='contained' sx={{backgroundColor:"#AF273E", borderRadius:"15px",mr:5}}>
                Create board                
                </Button>
                </Stack>
            </Box>
        </Box>
    )
}

export default CreateNewBoard