/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Box, Typography, Theme } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Message } from '../lib/chatStore';
import { DateTime } from 'luxon';
import DoneIcon from '@material-ui/icons/Done';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { supabase } from '../lib/supabaseClient';



const useStyles = makeStyles<Theme, Message>((theme) => ({
    root: {
       paddingTop: ({image}) =>  image ? 3 : 7,
        paddingBottom: 2,
        paddingLeft:  ({image}) =>  image ? 5 : 10,
        paddingRight: ({image}) =>  image ? 5 : 10,
        backgroundColor: 'teal',
        borderRadius: 11,
        borderTopRightRadius: 0 ,
       // borderBottomLeftRadius: 0
        
    },
    image: {
        position: 'relative',
        width: 240,
        height: 280,
        marginTop: 2,

   }
}));


function RecieverMessageBox({ message }: { message: Message }) {
   
    const [messageFile, setMessageFile] = useState<string | null>(null);
    const sanitizeTime = (dateTime: string) => {
         
        let dt = DateTime.fromISO(dateTime);
        return dt.toLocaleString(DateTime.TIME_24_SIMPLE);
        //return moment(dateTime).calendar(); 
    }
    
    const downloadImage = async (path: string) => {
        try {
            const { data, error } = await supabase.storage.from('message-files').download(path);
            if (error) { throw error }
            if (data) {
                const url = URL.createObjectURL(data);
                setMessageFile(url);
            }

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        message?.image && downloadImage(message.image)
        
       
    }, [message?.image])

    const classes = useStyles(message);
    
    return (
        <Box className={classes.root} width="fit-content" display="flex" flexDirection="column">
             {
                messageFile &&
                <Box>
                     <img
                        src={messageFile}
                        alt="msg"
                        className={classes.image}
                        //layout="fill"
                       // objectFit="cover"
                     />
                </Box>
            }
             <Box display="flex" width={messageFile && 240} flexWrap="wrap">
                <Typography style={{ fontSize: 15, fontWeight: 400, color: 'lightgray' }}>{message?.text }</Typography>
                 <Typography style={{ fontSize: 13, color: 'lightgray', paddingTop: '10px', paddingLeft: '25px', marginLeft: 'auto' }}
                >{sanitizeTime(message?.createdAt as string)} <DoneAllIcon fontSize='inherit' /></Typography>
            </Box>
        </Box>
    )
}

export default RecieverMessageBox
