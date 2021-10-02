import { Grid, Box, Typography } from '@material-ui/core'
import React from 'react'  //'#1f232a'
import Image from 'next/image'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Message } from '../lib/chatStore';
import { DateTime } from 'luxon';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 4,
        paddingBottom: 2,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#1f232a',
        borderRadius: 11,
        borderTopRightRadius: 0 ,
       // borderBottomLeftRadius: 0,
       // borderTopLeftRadius: 0
        
    },
    image: {
       display: 'none'
   }
}));


function SenderMessageBox({ message }: { message: Message | null }) {
    
     const sanitizeTime = (dateTime: string) => {
         
        let dt = DateTime.fromISO(dateTime);
        return dt.toLocaleString(DateTime.TIME_24_SIMPLE);
        //return moment(dateTime).calendar(); 
      }
    const classes = useStyles();
    return (
        <Box className={classes.root}    width="fit-content">
            {/*<Image src="/public/vercel.svg" width={30} height={20} alt="msg" className={classes.image} />*/}

            <span style={{ display: 'flex' }}>
                <Typography style={{ fontSize: 17, fontWeight: 400, color: 'lightgray' }}>{message?.text }</Typography>
                <Typography style={{ fontSize: 15, color: 'lightgray', paddingTop: '10px', paddingLeft: '25px', marginLeft: 'auto' }}
                >{sanitizeTime(message?.createdAt as string) }</Typography></span>
        </Box>
    )
}

export default SenderMessageBox
