/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { makeStyles, withStyles,createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Divider, List, ListItemAvatar, ListItemIcon, ListItemText,ListItem, Typography, ListItemSecondaryAction } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useStore, Chat } from '../lib/chatStore';
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



const ChatItem = ({ id, name, photo, createdAt, messages }: Chat ) => {
    const [ishovered, setHoverState] = useState<boolean>(false);
    const setCurrentChat = useStore(state => state.setCurrentChat);
    const currentChat = useStore(state => state.currentChat);
    const classes = useStyles(ishovered);
   // console.log(chat);
    
    const sanitizeTime = (dateTime:  string) => {

        return moment(dateTime).calendar();
      }
      
    
    return (
        
                    <>
                    <ListItem  
                     alignItems="flex-start"
                    className={classes.listItem}
                     button
                     //selected={/*currentChat?.id === chat.id*/ }
                      onClick={(event) => {
                     // handleListItemClick(event, 0)
                    setCurrentChat({
                        id: id,
                        name: name,
                        photo: photo,
                        createdAt: createdAt,
                        messages: messages
                    })}}
                     //selected={false/*selectedIndex === el.id*/}
                    >
                            <ListItemAvatar> 
                            <Avatar alt="Remy Sharp" className={classes.chatAvatar} src={photo } />
                            </ListItemAvatar>
                            <ListItemText
                                primary={name}
                                secondary={
                                    <React.Fragment>
                                        last messages here
                                    </React.Fragment>
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
