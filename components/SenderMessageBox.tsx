/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Box, Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Message } from '../lib/chatStore';
import { DateTime } from 'luxon';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { supabase } from '../lib/supabaseClient';


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
       //display: 'none'
       paddingBottom: 0,
       marginBottom: 0
   }
}));


function SenderMessageBox({ message }: { message: Message | null }) {

      const [messageFile, setMessageFile] = useState<string | null>(null);
     const sanitizeTime = (dateTime: string) => {
         
        let dt = DateTime.fromISO(dateTime);
        return dt.toLocaleString(DateTime.TIME_24_SIMPLE);
        //return moment(dateTime).calendar(); 
     }
    
    const downloadImage = async (path:string) => { 
        try {
            const { data, error } = await supabase.storage.from('message-files').download(path);
            if (error) { throw error }
            const url = URL.createObjectURL(data);
            setMessageFile(url);

        } catch (error ) {
             console.log( error);
        }
     };

    useEffect(() => {
        message?.image && downloadImage(message.image)
       
    }, [])
    const classes = useStyles();
    return (
        <Box className={classes.root} width="fit-content">
            {
                messageFile &&
                <Image src={messageFile} width={180} height={200} alt="msg" className={classes.image} />
            }

            <span style={{ display: 'flex' }}>
                <Typography style={{ fontSize: 17, fontWeight: 400, color: 'lightgray',}}>{message?.text }</Typography>
                <Typography style={{ fontSize: 15, color: 'lightgray', paddingTop: '10px', paddingLeft: '25px', marginLeft: 'auto' }}
                >{sanitizeTime(message?.createdAt as string) }</Typography></span>
        </Box>
    )
}

export default SenderMessageBox
