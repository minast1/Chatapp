import React, { useState } from 'react'
import { makeStyles, withStyles,createStyles, Theme } from '@material-ui/core/styles';
import { Avatar, Divider, List, ListItemAvatar, ListItemIcon, ListItemText,ListItem, Typography } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { useStore } from '../lib/chatStore';
import moment from 'moment';


export type AppProps = {
    id: number
    image?: string
    name: string 
    text?: string | number
    date: string
    //onClick: () => void
}



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
        '& .MuiListItem-root': {
            '&:hover': {
               
                '& $iconDisplay': {
                    display: 'flex'
                }
            }
        },
    },
    iconDisplay: (ishovered) => ({
        display: ishovered ? 'flex' : 'none'
    }),
}));



const ChatItem = ({id, image, name, text, date }: AppProps) => {
    const [ishovered, setHoverState] = useState<boolean>(false);
    const setCurrentChat = useStore(state => state.setCurrentChat);
    const classes = useStyles(ishovered);
    
    const sanitizeTime = (dateTime:  string) => {

        return moment(dateTime).calendar();
      }
      
    
    return (
        
                    <>
                    <ListItem  
                     alignItems="flex-start"
                    className={classes.listItem}
                      button
                onMouseEnter={() => setTimeout(() => setHoverState(false) , 4000)}
                  onMouseMove={() => setTimeout(() => setHoverState(false) , 1000)}
                onClick={(event) => {
                    setCurrentChat({
                        id: id,
                        name: name,
                        photo: image,
                        createdAt:date
                    })}}
                     selected={false/*selectedIndex === el.id*/}
                    >
                            <ListItemAvatar> 
                            <Avatar alt="Remy Sharp" className={classes.chatAvatar} src={image } />
                            </ListItemAvatar>
                            <ListItemText
                                primary={name}
                                secondary={
                                    <React.Fragment>
                                        {text}
                                    </React.Fragment>
                                }
                                 />
                            <ListItemIcon style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <Typography variant='caption' style={{ color: 'darkgray' }}>
                                    {sanitizeTime(date)}
                                </Typography>
                                <KeyboardArrowDownIcon className={classes.iconDisplay} />
                            </ListItemIcon>
                        </ListItem>
                        <Divider style={{ marginLeft: '80px' }} />
                       </>
    )
}

export default ChatItem
