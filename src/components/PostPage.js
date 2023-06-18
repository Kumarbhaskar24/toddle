import { Box, Stack, Divider, Button, Typography, Dialog, DialogTitle, TextField, DialogContent, Card, Menu, MenuItem, ListItemIcon } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Paper from '@mui/material/Paper'
import Logo3 from '../Image/Logo3.svg';
import Logo4 from '../Image/Logo4.svg';
import NoPostMobile from '../Image/NoPostMobile.svg';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { useEffect } from 'react';
import image4 from '../Image/image 4.svg'
import { styled } from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const PostPage = () => {
    const [subject, setSubject] = useState('');
    const [handlelist, SetList] = useState(null);
    const [editingBoardId, setEditingBoardId] = useState(null);
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [open, setOpen] = useState(false);

    const [expanded, setExpanded] = React.useState(false);
    const [posts, setPosts] = useState([]);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const handleClick = (e) => {
        SetList(e.currentTarget)
    }
    const handleOpenDialog = () => {
        setOpen(true);
    };
    const handleClose = () => {
        SetList(null);
    };
    const handleCloseDialog = () => {
        setOpen(false);
        setEditingBoardId(null);
    };
    const handleSubjectChange = (event) => {
        setSubject(event.target.value);
    };




    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const createNewPost = (subject, content) => {
        const newPost = {
            id: editingBoardId || Date.now(),
            subject: subject,
            content: content,
        };

        let updatedPosts;

        if (editingBoardId) {
            updatedPosts = posts.map((post) =>
                post.id === editingBoardId ? newPost : post
            );
        } else {
            updatedPosts = [...posts, newPost];
        }

        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
        handleCloseDialog();
        setSubject("");
        setEditingBoardId(null);
        setContent("");
    };



    const handleDeleteBoard = (id) => {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
        localStorage.setItem("posts", JSON.stringify(updatedPosts));
    };

    const handleEditBoard = (post) => {
        setEditingBoardId(post.id);
        setContent(post.content);
        setSubject(post.subject);
        setOpen(true);
    };

    useEffect(() => {
        const storedPosts = localStorage.getItem("posts");
        if (storedPosts) {
            setPosts(JSON.parse(storedPosts));
        }
    }, []);

    return (
        <Box sx={{ backgroundSize: "cover" }}>
            <Stack direction="row" sx={{ ml: 3, paddingTop: 1 }}>
                <IconButton type="button" component={Link} to="/" sx={{ p: '8px', justifyItems: "center" }} >
                    <ArrowBackIosIcon />
                </IconButton>

                <Box position="relative" sx={{ mt: 1 }}>
                    <img src={Logo3} alt="Background Image" />
                    <img src={Logo4} alt="Overlay Image" style={{ position: 'absolute', top: 8, left: 10, zIndex: 1 }} />
                </Box>
                <Typography variant='h7' sx={{ ml: 2, mt: 2 }}>
                    <b>Places around the world</b>
                </Typography>
                <Stack direction="row" sx={{ ml: 'auto', alignItems: 'center', mr: 2 }}>
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="bookmark">
                        <BookmarkBorderIcon />
                    </IconButton>
                </Stack>

            </Stack>
            <Box sx={{ backgroundSize: "cover", backgroundColor: "#EBFCFF", minHeight: '91vh' }}>
                <Stack direction={"row"} sx={{ mt: 2, ml: 8, justifyContent: "space-between" }}>
                    <Typography variant='h4'>
                        <b>Your posts</b>
                    </Typography>

                    <Button variant="contained" sx={{ backgroundColor: 'red', ml: 15, mr: 5, mt: 2 }} startIcon={<AddIcon />} onClick={handleOpenDialog}>
                        Create New Post
                    </Button>

                    <Dialog open={open} onClose={handleCloseDialog}>
                        <DialogTitle>
                            <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                                <Stack>
                                    <Typography variant="h5" sx={{ ml: 3, mr: 2, mt: 3 }}>
                                        <b>{editingBoardId ? 'Edit Board' : 'Create a post'}</b>

                                    </Typography>
                                    <Typography marginLeft={3}>
                                        Write somthing for your post
                                    </Typography>
                                </Stack>
                                <IconButton sx={{ ml: 15, mt: 2, mr: 1 }} onClick={handleCloseDialog}>
                                    <CloseIcon />
                                </IconButton>
                            </Stack>
                        </DialogTitle>
                        <DialogContent>
                            <TextField
                                id="outlined-basic"
                                label="Subject"
                                variant="outlined"
                                sx={{ ml: 3, width: "50ch" }}
                                value={subject}
                                onChange={handleSubjectChange}
                            />
                            <Button
                                variant="outlined"
                                color="primary"
                                sx={{ ml: 3, mt: 2 }}
                                startIcon={<AddPhotoAlternateIcon />}
                            >
                                Add Image
                            </Button>
                            <Divider orientation="horizontal" flexItem sx={{ mt: 3, mb: 3, ml: 3, mr: 3 }} />
                            <TextField
                                id="outlined-basic"
                                label="Type Here"
                                variant="outlined"
                                sx={{ ml: 3, width: "50ch" }}
                                value={content}
                                onChange={handleContentChange}
                            />
                            <Stack direction={"row"} sx={{ mt: 9, justifyContent: "right" }}>
                                <Button variant='contained' sx={{ backgroundColor: "#AF273E", borderRadius: "15px", mr: 5 }}
                                    onClick={() => createNewPost(subject, content)}>
                                    {editingBoardId ? 'Update Post' : 'Publish'}
                                </Button>
                            </Stack>
                        </DialogContent>
                    </Dialog>
                </Stack>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '70vh',
                }}>
                    <Stack direction="row" spacing={2} sx={{ ml: { xs: '5%', md: '10%', lg: '15%' }, mr: '2%' }}>
                        {posts.length > 0 ? (
                            posts.map((post) => (
                                <Card key={post.id} sx={{ maxWidth: 345 }}>
                                    <CardHeader
                                        action={
                                            <IconButton
                                                aria-controls="menu"
                                                aria-haspopup="true"
                                                onClick={handleClick}
                                                sx={{ ml: 2, mt: 3 }}>
                                                <MoreVertIcon />
                                            </IconButton>
                                        }

                                        title={post.subject}
                                        subheader="18th June, 2023"
                                    />
                                    <CardMedia
                                        component="img"
                                        height="194"
                                        image={image4}
                                        alt="img"
                                    />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {post.content}
                                        </Typography>
                                    </CardContent>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="add to favorites">
                                            <FavoriteIcon />
                                        </IconButton>
                                        <IconButton aria-label="share">
                                            <ShareIcon />
                                        </IconButton>
                                        <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                        >
                                            <ExpandMoreIcon />
                                        </ExpandMore>
                                    </CardActions>
                                    <Menu
                                        id="menu"
                                        anchorEl={handlelist}
                                        open={Boolean(handlelist)}
                                        onClose={handleClose}
                                        sx={{ borderRadius: "30px" }}
                                    >
                                        <MenuItem onClick={() => handleEditBoard(post)}>
                                            <ListItemIcon>
                                                <EditIcon />
                                            </ListItemIcon>
                                            Edit
                                        </MenuItem>
                                        <MenuItem onClick={() => handleDeleteBoard(post.id)} sx={{ color: "red" }}>
                                            <ListItemIcon>
                                                <DeleteIcon sx={{ color: 'red' }} />
                                            </ListItemIcon>
                                            <Typography sx={{ color: 'red' }}>Delete</Typography>
                                        </MenuItem>
                                    </Menu>
                                </Card>
                            ))
                        ) : (
                            <>
                                <img src={NoPostMobile} alt="Image" />
                                <Typography variant='h7'><b>Nothing here yet</b></Typography>
                                <Typography variant='h8' paddingTop={1}>
                                    Create your first post by clicking on the '+' button above
                                </Typography>
                            </>
                        )}

                    </Stack>
                </Box>

            </Box>
        </Box >
    )
}

export default PostPage;