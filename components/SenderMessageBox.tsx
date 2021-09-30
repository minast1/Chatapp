import { Grid, Box, Typography } from '@material-ui/core'
import React from 'react'  //'#1f232a'
import Image from 'next/image'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Message } from '../lib/chatStore';


const useStyles = makeStyles((theme) => ({
    root: {
        padding: 6,
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


function SenderMessageBox({message}: {message: Message | null}) {
    const classes = useStyles();
    return (
       <Box className={classes.root} fontWeight="fontWeightRegular"   width="fit-content">
            {/*<Image src="/public/vercel.svg" width={30} height={20} alt="msg" className={classes.image} />*/}

            <span style={{ display: 'flex' }}>
                <Typography style={{ fontSize: 15, fontWeight: 400, color: 'lightgray' }}>{ message?.text}</Typography>
                <Typography style={{ fontSize: 12, color: 'lightgray', paddingTop: '10px', paddingLeft: '25px', marginLeft: 'auto' }}
                >2:40</Typography></span>
        </Box>
    )
}

export default SenderMessageBox
