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
       paddingTop: 3,
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
      //  height: 'fit-content',
      // paddingBottom: 0,
      // paddingTop: '10px'
        
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
       
    }, [message?.image])
    const classes = useStyles();
    return (
        <Box className={classes.root} width="fit-content" display="flex" flexDirection="column">
            {
                messageFile &&
                <Box  style={{position: 'relative', width: 240, height: 280, marginTop: 7}}>
                    <Image
                        src={messageFile}
                         
                        alt="msg"
                        layout="fill"
                        objectFit="cover"
                        className={classes.image} />
                </Box>
            }

             <Box display="flex" width={messageFile && 240} flexWrap="wrap">
                <Typography style={{ fontSize: 15, fontWeight: 400, color: 'lightgray' }}>{message?.text }</Typography>
                <Typography style={{ fontSize: 13, color: 'lightgray', paddingTop: '10px', paddingLeft: '25px', marginLeft: 'auto' }}
                >{sanitizeTime(message?.createdAt as string)} </Typography>
            </Box>
        </Box>
    )
}

export default SenderMessageBox
