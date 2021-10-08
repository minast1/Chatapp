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
       //paddingTop: 10
        
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
        <Grid container className={classes.root}>
            
            <Grid item xs={12} container direction="column">
                    {
                messageFile &&
                <Grid style={{marginTop: 10 , position: 'relative' }}>
                 <Image src={messageFile} width={280} height={330} className={classes.image} alt="alt"/>
              </Grid>
                   // <Image src={messageFile} width={250} height={300} alt="msg" className={classes.image} />
                }
        
                <Grid item container alignItems="center" >
                    <Grid item xs={12}>
                   <Typography style={{ fontSize: 17, fontWeight: 400, color: 'lightgray'}}>{message?.text }</Typography>
                    </Grid>
                    <Grid item container xs={12} justifyContent="flex-end">
                        <Grid item>
                        <Typography style={{ fontSize: 12, color: 'lightgray'}}>{sanitizeTime(message?.createdAt as string) } </Typography>

                        </Grid>
                    </Grid>
                </Grid>
    
            </Grid>     
       </Grid>
    )
}

export default SenderMessageBox
