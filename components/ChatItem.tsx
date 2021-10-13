/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles,createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Divider, ListItemAvatar, ListItemIcon, ListItemText,ListItem, Typography, ListItemSecondaryAction } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useStore, Chat, Message, useChatMessagesStore } from '../lib/chatStore';
import moment from 'moment';
import { supabase } from '../lib/supabaseClient';
import CameraAltIcon from '@material-ui/icons/CameraAlt';




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
              // '&$iconDisplay': {
                   display: 'none'
                
            //}
        },
    },
   //iconDisplay: {display: 'flex'}
}));



const ChatItem = ({ id, name, photo, createdAt}: Chat ) => {
    const [ishovered, setHoverState] = useState<boolean>(false);
    const [textMessage, setLastMessageAsText] = useState<string | null>();
    const [imageMessage, setLastMessageAsImage] = useState<boolean>(false);
    const [lastMessageTime, setLastMessageTime] = useState<string>('')
    const setCurrentChat = useStore(state => state.setCurrentChat);
    const currentChat = useStore(state => state.currentChat);
    let DropDownTimeout: ReturnType<typeof setTimeout>;
    const classes = useStyles(ishovered);
    const chatMessages = useChatMessagesStore(state => state.chatMessages);
    // Fetch the chat messages and get the last one 
    const sanitizeTime = (dateTime: string) => {
        //const dt = new Date(dateTime);
        return moment(dateTime).calendar(null, {
            lastDay: '[Yesterday]',
            sameDay: '[Today]',
            nextDay: '[Tomorrow]',
            lastWeek: '[last] dddd',
            nextWeek: 'dddd',
            sameElse: 'L'
        })
    };

    const showDropDown = (): void => {
        DropDownTimeout = setTimeout(() => {
            setHoverState(true);
        }, 5)
    };
    
     const hideDropDown = (): void => {
         setHoverState(false);
         clearTimeout(DropDownTimeout);
    };
    const getLastChatMessage = async () => {

        const { data, error } = await supabase.from<Message>('messages').select('text').
        eq('chatId', id).order('createdAt', { ascending: false }).limit(1).single();
        //data && setLastMessage(data.text);
        if (data) {
           // const { text, image } = data;
            if (data.text  && !data.image) { // text  message
                setLastMessageAsText(data.text);
                setLastMessageAsImage(false);
            } else if(data.text && data.image){ //image with text message
                setLastMessageAsImage(true);
               setLastMessageAsText(data.text);
            }
            else if (!data.text && data.image ) { //image message
                setLastMessageAsImage(true);
                setLastMessageAsText(undefined);
            }
             
             
            setLastMessageTime(data.createdAt as string);
           
        }
         
    };

    useEffect(() => {
        getLastChatMessage();

    }, [chatMessages]
    )

    //console.log(textMessage , imageMessage);
    return (
        
                    <>
                    <ListItem  
                   alignItems="flex-start"
                  onMouseEnter={showDropDown}
                   onMouseLeave={hideDropDown}
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
                                        {textMessage && imageMessage== false ? textMessage : imageMessage && !textMessage? 
                                            <Typography style={{ display: 'flex', alignItems: 'center', fontSize: 14}}>
                                                <CameraAltIcon fontSize="small" style={{marginRight: 4}} />
                                                Photo
                                            </Typography>
                                            :   
                                            <Typography style={{ display: 'flex', alignItems: 'center', fontSize: 14}}>
                                                <CameraAltIcon fontSize="small" style={{marginRight: 4}} />
                                                Photo
                                                </Typography>
                                        }
                                    </Typography>
                                }
                                     />
                                                 
                            <ListItemIcon style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant='caption' style={{ color: 'darkgray' }}>
                                    {sanitizeTime(lastMessageTime)}
                    </Typography>
                    {
                        ishovered &&
                           <ListItemSecondaryAction style={{marginTop: 14}}>
                      <KeyboardArrowDownIcon fontSize="large" />
                          </ListItemSecondaryAction>
                    }
                              
                          </ListItemIcon>
              
                        </ListItem>
                        <Divider style={{ marginLeft: '80px' }} />
                       </>
    )
}

export default ChatItem
