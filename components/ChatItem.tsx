/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles,createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Divider, ListItemAvatar, ListItemIcon, ListItemText,ListItem, Typography, ListItemSecondaryAction } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useStore, Chat, Message, useChatMessagesStore } from '../lib/chatStore';
import moment from 'moment';
import { supabase } from '../lib/supabaseClient';




const useStyles = makeStyles<Theme, Boolean>(theme => createStyles({
   
    chats: {
        display: 'flex',
        alignItems: 'stretch',
        '&:hover': {
            backgroundColor: theme.palette.primary.main,
            cursor: 'pointer'

        }
    },
     chatAvatar: {
          width: theme.spacing(7),
          marginRight: 17 ,
      height: theme.spacing(7),
    },
   
     listItem: {
        '& .Mui-focusVisible': {
                '&$iconDisplay': {
                    display: 'none'
                
            }
        },
    },
   iconDisplay: {}
}));



const ChatItem = ({ id, name, photo, createdAt}: Chat ) => {
    const [ishovered, setHoverState] = useState<boolean>(false);
    const [message, setLastMessage] = useState<string | undefined>()
    const setCurrentChat = useStore(state => state.setCurrentChat);
    const currentChat = useStore(state => state.currentChat);
    const classes = useStyles(ishovered);
    const chatMessages = useChatMessagesStore(state => state.chatMessages);
    // Fetch the chat messages and get the last one 
    const sanitizeTime = (dateTime:  string) => {

        return moment(dateTime).calendar();
      }
      
    const getLastChatMessage = async () => {

        const { data, error } = await supabase.from<Message>('messages').select('text').
        eq('chatId', id).order('createdAt', { ascending: false }).limit(1).single();
        data && setLastMessage(data.text);
         
    };

    useEffect(() => {
        getLastChatMessage();

    }, [chatMessages]
    )

   // console.log(chatMessages);
    return (
        
                    <>
                    <ListItem  
                     alignItems="flex-start"
                    className={classes.listItem}
                     button
                     selected={currentChat?.id === id}
                      onClick={(event) => {
                     // handleListItemClick(event, 0)
                    setCurrentChat({
                        id: id,
                        name: name,
                        photo: photo,
                        createdAt: createdAt,
                    })}}
                     //selected={false/*selectedIndex === el.id*/}
                    >
                            <ListItemAvatar> 
                            <Avatar alt="Remy Sharp" className={classes.chatAvatar} src={photo } />
                            </ListItemAvatar>
                            <ListItemText
                                primary={name}
                                secondary={
                                    <Typography noWrap={true} style={{fontSize: 14,color: 'lightgray'}}>
                                        {message}
                                    </Typography>
                                }
                                     />
                                                 
                            <ListItemIcon style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant='caption' style={{ color: 'darkgray' }}>
                                    {sanitizeTime(createdAt)}
                                 </Typography>
                                 <ListItemSecondaryAction style={{marginTop: 15}} className={classes.iconDisplay}>
                      <KeyboardArrowDownIcon fontSize="large" />
                          </ListItemSecondaryAction>
                          </ListItemIcon>
              
                        </ListItem>
                        <Divider style={{ marginLeft: '80px' }} />
                       </>
    )
}

export default ChatItem
