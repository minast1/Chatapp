/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
import { Grid, Box, Typography, Theme } from "@material-ui/core";
import React, { useEffect, useState } from "react";
//import Image from 'next/image'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Message } from "../lib/chatStore";
import { DateTime } from "luxon";
import DoneIcon from "@material-ui/icons/Done";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import { supabase } from "../lib/supabaseClient";

const useStyles = makeStyles<Theme, Message>((theme) => ({
  root: {
    paddingTop: ({ image }) => (image ? 3 : 7),
    paddingBottom: 2,
    paddingLeft: ({ image }) => (image ? 5 : 10),
    paddingRight: ({ image }) => (image ? 5 : 10),
    backgroundColor: "#1f232a",
    borderRadius: 11,
    borderTopRightRadius: 0,
    // borderBottomLeftRadius: 0,
    // borderTopLeftRadius: 0
  },
  image: {
    // position: 'relative',
    width: 240, //240,
    height: 290, //290,
    marginTop: 2,
  },
  time: {
    fontSize: 13,
    color: "lightgray",
    paddingTop: ({ text, image }) => (image && !text ? "2px" : "10px"),
    paddingLeft: "25px",
    marginLeft: "auto",
    //position: ({text, image}) => image && !text ? 'relative' : 'fixed',
  },
  text: {
    fontSize: 15,
    fontWeight: 400,
    color: "lightgray",
  },
}));

function SenderMessageBox({ message }: { message: Message }) {
  const [messageFile, setMessageFile] = useState<string | null>(null);
  const sanitizeTime = (dateTime: string) => {
    let dt = DateTime.fromISO(dateTime);
    return dt.toLocaleString(DateTime.TIME_24_SIMPLE);
    //return moment(dateTime).calendar();
  };

  const downloadImage = async (path: string) => {
    try {
      const { data, error } = await supabase.storage
        .from("message-files")
        .download(path);
      if (error) {
        throw error;
      }
      if (data) {
        const url = URL.createObjectURL(data);
        setMessageFile(url);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    message?.image && downloadImage(message.image);
  }, [message?.image]);
  const classes = useStyles(message);
  return (
    <Box
      className={classes.root}
      width="fit-content"
      display="flex"
      flexDirection="column"
    >
      <>
        {messageFile && message.text ? (
          <Box>
            <img
              src={messageFile as string}
              alt="msg"
              className={classes.image}
              //layout="fill"
              // objectFit="cover"
            />
          </Box>
        ) : (
          <Box display="flex" width={messageFile && 240} flexWrap="wrap">
            {message.text && (
              <Typography className={classes.text}>{message?.text}</Typography>
            )}
            <Typography className={classes.time}>
              {sanitizeTime(message?.createdAt as string)}{" "}
            </Typography>
          </Box>
        )}
      </>
    </Box>
  );
}

export default SenderMessageBox;
