/* eslint-disable react-hooks/exhaustive-deps */
import { Avatar, Box, Grid, makeStyles, Typography } from '@material-ui/core';
import React, { useState} from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
import SendIcon from '@material-ui/icons/Send';
import AttachFileSharpIcon from '@material-ui/icons/AttachFileSharp';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import { Message, useStore } from '../lib/chatStore';
import SearchBar from "material-ui-search-bar";
import IconButton from '@material-ui/core/IconButton';
import SenderMessageBox from './SenderMessageBox';
import RecieverMessageBox from './RecieverMessageBox';
import { supabase } from '../lib/supabaseClient';



const useStyles = makeStyles((theme) => ({
    root: {
         height: 75,
        backgroundColor: '#101318',
        paddingLeft: 20,
        
    },

    searchChat: {
        padding: '4px',

        marginTop: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
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
        paddingLeft: 80,
        paddingRight: 70,
        paddingTop: 10,
        paddingBottom: 20 ,
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

    hide_input: {
        display: 'none'
    },
   
  chatAvatar: {
         width: theme.spacing(7.0),
      height: theme.spacing(7.0),
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
    const [message, setMessage] = useState<string>('');
    const [currentChatMessages, updateCurrentChatMessages] = useState<Message[] | []>([]);
    const user = supabase.auth.user();

    const fetchCurrentChatMessages = async () => {
        const { data: messages } = await supabase.from('messages').select('*')
            .eq('chatId', currentChat?.id);
        messages &&  updateCurrentChatMessages(messages)
    }
  

    React.useEffect(() => {
         fetchCurrentChatMessages(); 
        const mySubscription = supabase.from('messages')
            .on('INSERT', () => fetchCurrentChatMessages()).subscribe()
        return () => { supabase.removeSubscription(mySubscription)
    }
    }, [currentChat,currentChatMessages]);

    const sendMessge = async () => {
         
        const { data, error } = await supabase
            .from('messages')
            .insert([
                {
                    chatId: currentChat?.id,
                    text: message,
                    userId: 'cccde327-56fc-4624-a4a1-880abc20daa9'/*'fd6acfe8-31d5-41a2-9194-c24d25490d41'*/,
                    pending: true ,
                },
            ]);
        data && setMessage('');
    };
    
    const recordMessage = () => console.log('Make new voice note');
   // console.log(currentChat.messages);
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
            <Grid  container  className={classes.messages_area}>    {/** Messages area */}
                <Grid item container direction="column-reverse" alignItems="flex-end">
                    {
                        
                        currentChatMessages.map((el) => {
                            // return (
                          return  el.userId == user?.id ?
                            
                                <Grid item key={el._id} style={{ marginTop: 17, marginRight: 'auto' }}>
                                    <SenderMessageBox message={el} />
                                </Grid>
                                : <Grid item style={{ marginTop: 17 }} key={el._id}>
                                    <RecieverMessageBox message={el} />
                                </Grid>
                        })
                    }
                    
                </Grid>
            </Grid>
            
            <Grid container className={classes.bottomAppbar} alignItems="center">
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
                       // onRequestSearch={() => console.log('Searching...')}
                        closeIcon={<ClearIcon style={{ display: 'none', opacity: 0 }} />}
                        searchIcon={<SearchIcon style={{ display: 'none' , opacity: 0 }}/>}
                        onChange={(newValue) => setMessage(newValue)}
                        value={message}
                        
                        className={classes.searchChat}
                    />
                </Grid>
                <Grid item xs={1} container justifyContent='center'>
                   <Grid item>
                        <IconButton
                            color="inherit"
                            onClick={(event) => {
                                event.preventDefault();
                                message.length > 0 ? sendMessge() : recordMessage()
                            } }>
                            {message.length > 0 ? <SendIcon /> : <MicIcon />}
                        </IconButton>
                   </Grid>
                </Grid>
            </Grid>
           
        </div>
    )
}


export default Chatarea

