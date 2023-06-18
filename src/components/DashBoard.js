import LogoTo from '../Image/LogoTo.svg';
import { useState } from "react";
import { Box, Stack } from "@mui/system";
import { Button, Typography, Dialog, DialogTitle, TextField, DialogContent, Card, Menu, MenuItem, ListItemIcon } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


const DashBoard = () => {
    const [handlelist, SetList] = useState(null);
    const [open, setOpen] = useState(false);
    const [boardName, setBoardName] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [editingBoardId, setEditingBoardId] = useState(null); // Track the board ID being edited
    const [boards, setBoards] = useState([]);
    const [searchText, setSearchText] = useState("");

    const handleClick = (e) => {
        SetList(e.currentTarget)
    }

    const handleClose = () => {
        SetList(null);
    };

    const handleOpenDialog = () => {
        setOpen(true);
    };

    const handleCloseDialog = () => {
        setOpen(false);
        setEditingBoardId(null);
        setBoardName("");
        setSelectedColor("");
    };

    const handleCreateBoard = () => {
        const updatedBoard = {
            id: editingBoardId || Date.now(),
            name: boardName,
            color: selectedColor,
        };

        const updatedBoards = editingBoardId
            ? boards.map((board) => (board.id === editingBoardId ? updatedBoard : board))
            : [...boards, updatedBoard];

        setBoards(updatedBoards);
        localStorage.setItem("boards", JSON.stringify(updatedBoards));

        setBoardName("");
        setSelectedColor("");
        setEditingBoardId(null);
        setOpen(false);
    };


    const handleDeleteBoard = (id) => {
        const updatedBoards = boards.filter((board) => board.id !== id);
        setBoards(updatedBoards);
        localStorage.setItem("boards", JSON.stringify(updatedBoards));
    };

    const handleEditBoard = (board) => {
        setEditingBoardId(board.id);
        setBoardName(board.name);
        setSelectedColor(board.color);
        setOpen(true);
    };
    useEffect(() => {
        const storedBoards = localStorage.getItem("boards");
        if (storedBoards) {
            setBoards(JSON.parse(storedBoards));
        }
    }, []);
    return (
        <Box>
            <Stack
                direction="row"
                sx={{ ml: 3, paddingTop: 3, paddingBottom: 1 }}
                borderBottom={1}
                borderColor="lightslategrey"
            >
                <img src={LogoTo} alt="Logo" />
                <Paper sx={{ ml: '50%',mr:'5%' }}>
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search" >
                        <SearchIcon />
                    </IconButton>
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        variant="outlined"
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </Paper>
                <Button variant="contained" sx={{ backgroundColor: 'red', ml: 13,mr:2 }} startIcon={<AddIcon />} onClick={handleOpenDialog}>
                    Create New Board
                </Button>

                <Dialog open={open} onClose={handleCloseDialog}>
                    <DialogTitle>
                        <Stack direction="row">
                            <Typography variant="h5" sx={{ ml: 4, mr: 2, mt: 3 }}>
                                <b>{editingBoardId ? 'Edit Board' : 'Add a name for your board'}</b>
                            </Typography>
                            <IconButton sx={{ ml: 15, mt: 2, mr: 1 }} onClick={handleCloseDialog}>
                                <CloseIcon />
                            </IconButton>
                        </Stack>
                    </DialogTitle>
                    <DialogContent>
                        <TextField
                            id="outlined-basic"
                            label="Add Name"
                            variant="outlined"
                            sx={{ mt: 3, ml: 4, width: "50ch" }}
                            value={boardName}
                            onChange={(e) => setBoardName(e.target.value)}
                        />
                        <Typography variant='h5' sx={{ ml: 4, mr: 2, mt: 5 }}>
                            <b>Select Post Color</b>
                        </Typography>
                        <Typography variant='h7' sx={{ ml: 4 }}>
                            Here are some templates to help you get started
                        </Typography>

                        <Stack direction="row" spacing={2} sx={{ mt: 5, ml: 4 }}>
                            <Button
                                variant='outlined'
                                size='small'
                                sx={{ backgroundColor: "#A7F0F9", borderRadius: "100%", width: "24.05px", height: "24.05px" }}
                                onClick={() => setSelectedColor("#A7F0F9")}
                            ></Button>
                            <Button
                                variant='outlined'
                                size='small'
                                sx={{ backgroundColor: "#C5C5FC", borderRadius: "100%", width: "24.05px", height: "24.05px" }}
                                onClick={() => setSelectedColor("#C5C5FC")}
                            ></Button>
                            <Button
                                variant='outlined'
                                size='small'
                                sx={{ backgroundColor: "#FFAEC0", borderRadius: "100%", width: "24.05px", height: "24.05px" }}
                                onClick={() => setSelectedColor("#FFAEC0")}
                            ></Button>
                            <Button
                                variant='outlined'
                                size='small'
                                sx={{ backgroundColor: "#FFCC66", borderRadius: "100%", width: "24.05px", height: "24.05px" }}
                                onClick={() => setSelectedColor("#FFCC66")}
                            ></Button>
                        </Stack>
                        <Stack direction={"row"} sx={{ mt: 9, justifyContent: "right" }}>
                            <Button
                                variant='contained'
                                sx={{ backgroundColor: "#AF273E", borderRadius: "15px", mr: 5 }}
                                onClick={handleCreateBoard}
                            >
                                {editingBoardId ? 'Update Board' : 'Create Board'}
                            </Button>
                        </Stack>
                    </DialogContent>
                </Dialog>
                <IconButton type="button" component={Link} to="/postpage" sx={{ p: '8px', justifyItems: "center" }} >
                    <ArrowForwardIosIcon />
                </IconButton>
            </Stack>
            
            {
                searchText?boards.filter((board) => board.name.toLowerCase().includes(searchText.toLowerCase()))
                    .map((board) => (
                        <Stack direction="row" spacing={2} sx={{ ml:{xs: '5%', md: '10%', lg: '15%'} }}>
                            <Card key={board.id} sx={{ width: "410px", height: "90px", mb: 2 }}>
                                <Stack direction="row">
                                    <Card sx={{ backgroundColor: board.color, width: "116px", height: "90px" }} />
                                    <Card sx={{ width: "294px", height: "90px" }}>
                                        <Stack direction="row" justifyContent="space-between">
                                            <Typography justifyContent="center" sx={{ ml: 2, mt: 4 }}>{board.name}</Typography>
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
                                                <MenuItem onClick={() => handleEditBoard(board)}>
                                                    <ListItemIcon>
                                                        <EditIcon />
                                                    </ListItemIcon>
                                                    Edit
                                                </MenuItem>
                                                <MenuItem onClick={() => handleDeleteBoard(board.id)} sx={{ color: "red" }}>
                                                    <ListItemIcon>
                                                        <DeleteIcon sx={{ color: 'red' }} />
                                                    </ListItemIcon>
                                                    <Typography sx={{ color: 'red' }}>Delete</Typography>
                                                </MenuItem>
                                            </Menu>
                                        </Stack>
                                    </Card>
                                </Stack>
                            </Card>
                        </Stack>
                    )):null
            }

            <Typography variant="h4" sx={{ ml: 3, padding: 2 }}>
                <b>My Boards</b>
            </Typography>

            <Stack direction="row" spacing={2} sx={{ ml:{xs: '5%', md: '10%', lg: '15%'},mr:'2%' }}>
                {boards.map((board) => (
                    <Card key={board.id} sx={{ width: "410px", height: "90px", mb: 2 }}>
                        <Stack direction="row">
                            <Card sx={{ backgroundColor: board.color, width: "116px", height: "90px" }} />
                            <Card sx={{ width: "294px", height: "90px" }}>
                                <Stack direction="row" justifyContent="space-between">
                                    <Typography justifyContent="center" sx={{ ml: 2, mt: 4 }}>{board.name}</Typography>
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
                                        <MenuItem onClick={() => handleEditBoard(board)}>
                                            <ListItemIcon>
                                                <EditIcon />
                                            </ListItemIcon>
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={() => handleDeleteBoard(board.id)} sx={{ color: "red" }}>
                                            <ListItemIcon>
                                                <DeleteIcon sx={{ color: 'red' }} />
                                            </ListItemIcon>
                                            <Typography sx={{ color: 'red' }}>Delete</Typography>
                                        </MenuItem>
                                    </Menu>
                                </Stack>
                            </Card>
                        </Stack>
                    </Card>
                ))}
            </Stack>
        </Box>
    );
}

export default DashBoard;
