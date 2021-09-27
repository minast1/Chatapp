/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Avatar, Divider, List} from '@material-ui/core';
import DonutLargeSharpIcon from '@material-ui/icons/DonutLargeSharp';
import ChatSharpIcon from '@material-ui/icons/ChatSharp';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchBar from "material-ui-search-bar";
import  Grid  from '@material-ui/core/Grid';
import ChatItem from './ChatItem';
import { useStore, Chat } from '../lib/chatStore';
import { supabase } from '../lib/supabaseClient'



const useStyles = makeStyles((theme) => ({
    componentRoot: {
        flexGrow: 1,
    },
    root: {
        height: 75 ,
        backgroundColor: '#101318',//'#37474f',
        borderRight: '1px solid #272c35',
    },

    menuButton: {
        marginRight: theme.spacing(1),
    },

    searchChat: {
       //marginTop: theme.spacing(2),
       // marginRight: theme.spacing(2),
        width: '100%',
        height: 43,
        borderRadius: '25px',
        backgroundColor: theme.palette.primary.main,
        
    },
    iconButton: {
        padding: 10,
    },

    appBarIconContainer: {

        '& .MuiButtonBase-root': {
            [theme.breakpoints.down('xl')]: {
                padding: '12px'
            },
            [theme.breakpoints.down('md')]: {
                padding: '6px'
            },

        }
    },
    userAvatar: {
         width: theme.spacing(7),
      height: theme.spacing(7),
    },
    list: {
        maxHeight: '100vh',
        overflow: 'auto',
          "&::-webkit-scrollbar": {
          width: '0.4em',
         },
        "&::-webkit-scrollbar-track": {
          boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
        },
       "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.primary.main,
        outline: `1px solid slategrey`,
        },
    }
   

}));

const getChatProfileImage = () => {
    return  '/avatar-3.jpg' 
}




export default function Sidearea({userChats} : {userChats: Chat[]}) {
 
    const [selectedIndex, setselectedIndex] = useState(null);
    const hadleListItemClick = (index:number) => {
        //setselectedIndex(index)
    }


    const classes = useStyles();

    return (
        <div className={classes.componentRoot}>
            <Grid container >
                <Grid item container className={classes.root} alignItems="center">
                    <Grid xs={3} sm={5} md={7} item style={{paddingLeft: 13}}>
                   <Avatar src='/avatar.jpg' className={ classes.userAvatar}/>
                    </Grid>
                    <Grid item xs={8} sm={7} md={5}container>
                        <Grid item className={classes.appBarIconContainer}>
                          <IconButton color="inherit">
                            <DonutLargeSharpIcon />
                        </IconButton>
                        </Grid>
                        <Grid item style={{paddingLeft: 1}} className={classes.appBarIconContainer}>
                            <IconButton color="inherit">
                                 <ChatSharpIcon />
                                </IconButton>
                        </Grid>
                        <Grid item className={classes.appBarIconContainer}>
                             <IconButton color="inherit" aria-label="display more actions">
                                   <MoreVertIcon />
                                </IconButton>
                         </Grid>
                            
                    </Grid>
                </Grid>
                <Grid item  container xs={12}>
                    <Grid item xs={11} style={{ paddingLeft: 13, paddingTop: 10}}>
                        <SearchBar
                        onRequestSearch={() => console.log('Searching...')}
                        onChange={() => console.log('ive been clicked!')}
                        value=""
                        
                        className={classes.searchChat}
                    />
                    </Grid>
                    <Grid item container justifyContent='flex-end' xs >
                        <Divider orientation="vertical" flexItem/>
                    </Grid>
                    
                </Grid>
                <Grid item xs={12} style={{paddingTop: 10}}>
                    <Divider/>
                </Grid>
                <Grid item xs={12}>
                    <List className={classes.list} style={{}}>
                        {userChats?.map(({ id, photo, name, createdAt }) => {
                            return (
                                <ChatItem
                                key={id}
                                id={id}    
                                image={photo}
                                name={name}
                               text="fuck yall..."
                                date={createdAt}
                              //onClick={() => console.log('Ive been clicked!')}
                                
                            />)
                        })}
                     </List>
                </Grid>
            </Grid>
            
       </div>
    );
}    
