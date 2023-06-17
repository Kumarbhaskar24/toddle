import { Box, Stack } from "@mui/system";
import LogoTo from '../Image/LogoTo.svg';
import { Button, Typography,Dialog, DialogTitle, TextField,DialogContent, Card, Menu, MenuItem, ListItemIcon } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
const DashBoard = () => {

    const [handlelist, SetList] = useState(null);

    const handleClick = (e) => {
        SetList(e.currentTarget)
    }
    const handleClose = () => {
        SetList(null);
    };
    const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const handleCloseDialog = () => {
    setOpen(false);
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
                <Button variant="contained" sx={{ backgroundColor: 'red', ml: 15 }} startIcon={<AddIcon />} onClick={handleOpenDialog}>
        Create New Board
      </Button>

                <Dialog open={open} onClose={handleCloseDialog}>
                    <DialogTitle>
                        <Stack direction="row">
                            <Typography variant="h5" sx={{ ml: 4, mr: 2, mt: 3 }}>
                                <b>Add a name for your board</b>
                            </Typography>
                            <IconButton sx={{ ml: 15, mt: 2, mr: 1 }} onClick={handleCloseDialog}>
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                    </DialogTitle>
                    <DialogContent>
                        <TextField id="outlined-basic" label="Add Name" variant="outlined" sx={{ mt: 3, ml: 4, width: "50ch" }} >
                        </TextField>
                        <Typography variant='h5' sx={{ ml: 4, mr: 2, mt: 5 }}>
                            <b>Select Post Color</b>
                        </Typography>
                        <Typography variant='h7' sx={{ ml: 4 }}>
                            Here are some templates to help you get started
                        </Typography>

                        <Stack direction="row" spacing={2} sx={{ mt: 5, ml: 4 }}>
                            <Button variant='outlined' size='small' sx={{ backgroundColor: "#A7F0F9", borderRadius: "100%", width: "24.05px", height: "24.05px" }}></Button>
                            <Button variant='outlined' size='small' sx={{ backgroundColor: "#C5C5FC", borderRadius: "100%", width: "24.05px", height: "24.05px" }}></Button>
                            <Button variant='outlined' size='small' sx={{ backgroundColor: "#FFAEC0", borderRadius: "100%", width: "24.05px", height: "24.05px" }}></Button>
                            <Button variant='outlined' size='small' sx={{ backgroundColor: "#FFCC66", borderRadius: "100%", width: "24.05px", height: "24.05px" }}></Button>
                        </Stack>
                        <Stack direction={"row"} sx={{ mt: 9, justifyContent: "right" }}>
                            <Button variant='contained' sx={{ backgroundColor: "#AF273E", borderRadius: "15px", mr: 5 }}>
                                Create board
                            </Button>
                        </Stack>
                    </DialogContent>
                </Dialog>



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
                                    sx={{ borderRadius: "30px" }}
                                >

                                    <MenuItem onClick={handleClose}>
                                        <ListItemIcon>
                                            <EditIcon />
                                        </ListItemIcon>
                                        Edit</MenuItem>
                                    <MenuItem onClick={handleClose} sx={{ color: "red" }}>
                                        <ListItemIcon>
                                            <DeleteIcon sx={{ color: 'red' }} />
                                        </ListItemIcon>
                                        <Typography sx={{ color: 'red' }}>Delete</Typography></MenuItem>
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
                                            <DeleteIcon sx={{ color: 'red' }} />
                                        </ListItemIcon>
                                        <Typography sx={{ color: 'red' }}>Delete</Typography></MenuItem>
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