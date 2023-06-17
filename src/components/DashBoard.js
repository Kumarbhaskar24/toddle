import { Box, Stack } from "@mui/system";
import LogoTo from '../Image/LogoTo.svg';
import { Button, Typography, Card, Menu, MenuItem, ListItemIcon } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
const DashBoard = () => {

    const [handlelist, SetList] = useState(null);

    const handleClick = (e) => {
        SetList(e.currentTarget)
    }
    const handleClose = () => {
        SetList(null);
    };
    return (
        <Box>
            <Stack direction="row" sx={{ ml: 3, paddingTop: 3, paddingBottom: 1 }}
                borderBottom={1}
                borderColor="lightslategrey"
            >
                <img src={LogoTo} alt="Logo" />
                <Paper sx={{ ml: 120 }}>
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        variant="outlined"
                    />
                </Paper>
                <Button variant="contained" sx={{ backgroundColor: "red", ml: 15 }} startIcon={<AddIcon />}>
                    Create New Board
                </Button>
            </Stack>
            <Typography variant="h4" sx={{ ml: 3, padding: 2 }}>
                <b>My Boards</b>
            </Typography>

            <Stack direction="row"  >
                <Card sx={{ ml: 5, mr: 3, width: "410px", height: "90px" }}>
                    <Stack direction="row">
                        <Card sx={{ backgroundColor: "#CAF8FF", width: "116px", height: "90px" }} />
                        <Card sx={{ width: "294px", height: "90px" }}>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography justifyContent="center" sx={{ ml: 2, mt: 4 }}>Earth Changes and Journeys </Typography>
                                <IconButton
                                    aria-controls="menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    sx={{ ml: 2, mt: 3 }}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="menu"
                                    anchorEl={handlelist}
                                    open={Boolean(handlelist)}
                                    onClose={handleClose}
                                    sx={{borderRadius:"30px"}}
                                >

                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <EditIcon />
                                        </ListItemIcon>
                                        Edit</MenuItem>
                                    <MenuItem onClick={handleClose} sx={{color:"red"}}>
                                        <ListItemIcon>
                                            <DeleteIcon sx={{ color: 'red' }} />
                                        </ListItemIcon>
                                        <Typography sx={{color:'red'}}>Delete</Typography></MenuItem>
                                </Menu>
                            </Stack>
                        </Card>
                    </Stack>
                </Card>

                <Card sx={{ ml: 5, mr: 3, width: "410px", height: "90px" }}>
                    <Stack direction="row">
                        <Card sx={{ backgroundColor: "#FFEDC1", width: "116px", height: "90px" }} />
                        <Card sx={{ width: "294px", height: "90px" }}>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography justifyContent="center" sx={{ ml: 2, mt: 4, mr: 5 }}>Eating Right  </Typography>
                                <IconButton
                                    aria-controls="menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}
                                    sx={{ ml: 2, mt: 3 }}
                                >
                                    <MoreVertIcon />
                                </IconButton>
                                <Menu
                                    id="menu"
                                    anchorEl={handlelist}
                                    open={Boolean(handlelist)}
                                    onClose={handleClose}
                                >

                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <EditIcon />
                                        </ListItemIcon>
                                        Edit</MenuItem>
                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <DeleteIcon sx={{ color: 'red' }}/>
                                        </ListItemIcon>
                                        <Typography sx={{color:'red'}}>Delete</Typography></MenuItem>
                                </Menu>
                            </Stack>
                        </Card>
                    </Stack>
                </Card>
            </Stack>
        </Box>

    );
}
export default DashBoard;