import { Avatar, Box, ButtonBase, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useState, useEffect, useRef } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import MessageBox from './MessageBox';
import Welcome from './Welcome';
import { useStore } from '../lib/chatStore';
import SearchBar from "material-ui-search-bar";
import IconButton from '@material-ui/core/IconButton';





const useStyles = makeStyles((theme) => ({
    root: {
         height: 75,
        backgroundColor: '#101318',
        paddingLeft: 20,
        
    },
Approot: { },

    searchChat: {
        padding: '4px',

        marginTop: theme.spacing(1),
        //marginLeft: theme.spacing(2),
        // marginRight: theme.spacing(2),
        // marginBottom: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        //width: 400,
        height: 45,
        borderRadius: '30px',
        flexGrow: 1,
        backgroundColor: theme.palette.primary.main
    },
    iconButton: {
        padding: 10,
    },
    messages_area: {
         borderLeft: '1px solid #272c35',
        backgroundImage: 'url(/wa_bg.png)',
        //backgroundRepeat: 'no-repeat',
        backgroundSize: 'inherit',
        height: theme.spacing(64),
        [theme.breakpoints.down('md')]: {
            height: theme.spacing(75)
        } /*increasee height based on breakpoint*/,
        flexGrow: 1,
        /*'&::-webkit-scrollbar': {
            width: '0.5em'
        },
        '&::-webkit-scrollbar-track': {
            boxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)',
            webkitBoxShadow: 'inset 0 0 6px rgba(0,0,0,0.00)'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.palette.primary.main,
            //outline: '1px solid slategrey'
        }*/
    },
    no_messages_area: {
        height: theme.spacing(70)
    },

    reciever_background: {
        backgroundColor: '#009688',
    },

    sender_background: {
        backgroundColor: '#1f232a'
    },
    hover_effect: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    large_avatar: {
        width: '200px',
        height: '200px',
    },
   
    hide_input: {
        display: 'none'
    },
    menuButton: {
        //marginRight: theme.spacing(0.5),
    },
    toolbar: {

        '& .MuiListItemText-primary': {
            fontWeight: 'bold',
            color: 'white'
        },
        "& .MuiListItemText-secondary": {
            color: 'white',
            [theme.breakpoints.down('xs')]: {
                display: 'none'
            }
        }
    },
    messageBox: {
        [theme.breakpoints.down('xs')]: {
            margin: '3px'
        }
    },
    title: {
        flexGrow: 1,
        alignSelf: 'center',
    },
    
  chatAvatar: {
         width: theme.spacing(7.0),
      height: theme.spacing(7.0),
    },
    iconContainer: {
     // padding: '1px'
    },
    bottomAppbar: {
         height: 70,
        backgroundColor: '#101318',
        paddingLeft: 20,
         paddingBottom: 5
    }

}));



const  Chatarea = () => {

    const classes = useStyles();
    const currentChat = useStore(state => state.currentChat);

    const submitMessage = async() => {
        console.log('message submitted..');
    }

    const sanitizeTime = (dateTime: Date) => {
        return dateTime.toLocaleString
    }

    return (

        <div>
            <Grid container  className={classes.root}>
                <Grid item container alignItems='center' xs={12}>
                    <Grid item container xs={11} spacing={7} alignItems="center"> {/*  Avatar and Name container*/}
                        <Grid item>
                         <Avatar src={currentChat?.photo} className={ classes.chatAvatar}/>
                        </Grid>
                        <Grid>
                        <Grid item direction="column"  container spacing={1} >
                        <Typography>{currentChat?.name}</Typography>
                        <Typography>LastSeen 2days ago</Typography>
                    </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs>     {/**  Icons container */}
                        <Grid item >
                            <IconButton color="inherit"> 
                            <SearchIcon />
                        </IconButton>
                        </Grid>
                        <Grid item >

                            <IconButton aria-label="display more actions" color="inherit">
                            <MoreVertIcon />
                        </IconButton>
                        </Grid>
                      </Grid>
                   
                </Grid>
                 
            </Grid>
            <Grid  container direction="column" xs={12} className={classes.messages_area}>    {/** Messages area */}
                <Grid item> message 1</Grid>
                <Grid item> message 2</Grid>
            </Grid>
            
            <Grid container xs={12} className={classes.bottomAppbar} alignItems="center">
                <Grid item xs> 
                    <IconButton  color="inherit" style={{padding: 0, marginRight: 20}}>
                            <MoodIcon />
                        </IconButton>
                    <IconButton style={{padding:0}}  color="inherit" edge="end" onClick={() => console.log('do nothing')}>
                            <AttachFileSharpIcon />
                        </IconButton>
                  </Grid>
                <Grid item xs={10} style={{paddingLeft: 15}}>
                    <SearchBar
                         placeholder="Type a message"
                        onRequestSearch={() => console.log('Searching...')}
                        closeIcon={<ClearIcon style={{ display: 'none', opacity: 0 }} />}
                        searchIcon={<SearchIcon style={{ display: 'none' , opacity: 0 }}/>}
                        onChange={() => console.log('ive been clicked!')}
                        value=""
                        
                        className={classes.searchChat}
                    />
                </Grid>
                <Grid item xs={1} container justifyContent='center'>
                   <Grid item>
                     <IconButton  color="inherit">
                            <MicIcon />
                        </IconButton>
                   </Grid>
                </Grid>
            </Grid>
           
        </div>
    )
}


export default Chatarea

