/* eslint-disable react-hooks/exhaustive-deps */
import {
  Avatar,
  Container,
  CssBaseline,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React, { useState, useRef } from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import MoodIcon from "@material-ui/icons/Mood";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
import AttachFileSharpIcon from "@material-ui/icons/AttachFileSharp";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";
import { Message, useChatMessagesStore, useStore } from "../lib/chatStore";
import SearchBar from "material-ui-search-bar";
import IconButton from "@material-ui/core/IconButton";
import SenderMessageBox from "./SenderMessageBox";
import RecieverMessageBox from "./RecieverMessageBox";
import { supabase } from "../lib/supabaseClient";
import PersonIcon from "@material-ui/icons/Person";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";
import CameraAltIcon from "@material-ui/icons/CameraAlt";
import PanoramaIcon from "@material-ui/icons/Panorama";
import Fade from "@material-ui/core/Fade";
import Header from "./Header";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 75,
    backgroundColor: "#101318",
    paddingLeft: 20,
  },

  mainroot: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  fab: {
    position: "fixed",
    bottom: theme.spacing(10),
    paddingLeft: 53,
    // right: theme.spacing(2),
  },

  searchChat: {
    padding: "4px",
    //width: 650 ,
    marginTop: theme.spacing(1),
    display: "flex",
    alignItems: "center",
    height: 45,
    borderRadius: "30px",
    //marginRight: 10,
    // marginLeft: 10 ,
    backgroundColor: theme.palette.primary.main,
  },
  iconButton: {
    padding: 10,
  },
  messages_area: {
    borderLeft: "1px solid #272c35",
    backgroundImage: "url(/wa_bg.png)",
    paddingLeft: 80,
    paddingRight: 70,
    paddingTop: 10,
    paddingBottom: 20,
    backgroundSize: "inherit",
    height: theme.spacing(63),
    [theme.breakpoints.down("md")]: {
      height: theme.spacing(58),
    } /*increasee height based on breakpoint*/,
    //flexGrow: 1,

    // maxHeight: '80%',
    overflow: "auto",
  },

<<<<<<< HEAD
  input: {
    display: "none",
  },
=======
    searchChat: {
        padding: '4px',
         //width: 650 ,
        marginTop: theme.spacing(1),
        display: 'flex',
        alignItems: 'center',
        height: 45,
        borderRadius: '30px',
        //marginRight: 10,
       // marginLeft: 10 ,
        backgroundColor: theme.palette.primary.main
    },
    iconButton: {
        padding: 10,
    },
    messages_area: {
        borderLeft: '1px solid #272c35',
        backgroundImage: 'url(/wa_bg.png)',
        paddingLeft: 80,
        paddingRight: 70,
        paddingTop: 10,
        paddingBottom: 20,
       backgroundRepeat: 'repeat',
        backgroundSize: 'auto',
        height:  theme.spacing(63),
        [theme.breakpoints.down('md')]: {
           height: theme.spacing(53),
            backgroundRepeat: 'repeat-y'
        } /*increasee height based on breakpoint*/,
        //flexGrow: 1,
       
         // maxHeight: '80%',
        overflow: 'auto',
    },
>>>>>>> 273c22f7a4901f9770ee01a101e60e07cccaae40

  chatAvatar: {
    width: theme.spacing(7.0),
    height: theme.spacing(7.0),
  },
  bottomAppbar: {
    height: 70,
    backgroundColor: "#101318",
    paddingLeft: 15,
    paddingBottom: 5,
  },
  person: {
    backgroundColor: "#42a5f5",
    width: theme.spacing(7),
    height: theme.spacing(7),
    "&:hover": {
      cursor: "pointer",
    },
    border: 0,
  },
  document: {
    backgroundColor: "#673ab7",
    "&:hover": {
      cursor: "pointer",
    },
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: 0,
  },
  camera: {
    backgroundColor: "#f50057",
    "&:hover": {
      cursor: "pointer",
    },
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: 0,
  },
  image: {
    backgroundColor: "#d500f9",
    "&:hover": {
      cursor: "pointer",
    },
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: 0,
  },
  footer: {
    paddingTop: 5,
    marginTop: "auto",
    backgroundColor: "#101318",
    height: 70,
  },
  main: {
    // marginTop: theme.spacing(8),
    // marginBottom: theme.spacing(2),
  },
}));

const Chatarea = () => {
  const classes = useStyles();
  const currentChat = useStore((state) => state.currentChat);
  const chatMessages = useChatMessagesStore((state) => state.chatMessages);
  const updateChatMessages = useChatMessagesStore(
    (state) => state.updateChatMessages
  );
  const [message, setMessage] = useState<string>("");

  const user = supabase.auth.user();
  const [attachments, toggleAttachments] = useState<boolean>(false);
  const ref1 = useRef<HTMLInputElement>(null);
  // const ref2 = useRef<HTMLInputElement>(null);
  // const ref3 = useRef<HTMLInputElement>(null);
  const [fileSelected, setFileSelected] = useState<File | null>(null);

  const fetchCurrentChatMessages = async () => {
    const { data: messages } = await supabase
      .from<Message>("messages")
      .select("*")
      .eq("chatId", currentChat?.id);
    messages && updateChatMessages(messages);
  };

  React.useEffect(() => {
    fetchCurrentChatMessages();
    const mySubscription = supabase
      .from("messages")
      .on("INSERT", () => fetchCurrentChatMessages())
      .subscribe();
    return () => {
      supabase.removeSubscription(mySubscription);
    };
  }, [currentChat?.id]);

  const processFile = (): string => {
    //ONLY ALLOW IMAGE FILES FOR NOW !11
    const fileExt = fileSelected?.name.split(".").pop();
    const fileName = `${user?.id}${Math.random()}.${fileExt}`;
    const filePath = `public/${fileName}`;
    return filePath;
  };

  const sendTextMessage = async (path?: string) => {
    const { data, error } = await supabase.from("messages").insert([
      {
        chatId: currentChat?.id,
        text: message,
        userId: user?.id,
        pending: true,
        image: path ? path : null,
      },
    ]);
    data && setMessage("");
  };

  const uploadFile = async (path: string, file: File) => {
    try {
      const { error: uploadError } = await supabase.storage
        .from("message-files")
        .upload(path, file, {
          cacheControl: "3600",
          upsert: false,
        });
      if (uploadError) {
        throw uploadError;
      }
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessge = async () => {
    //1.Text message  => fileSeclected === null
    if (fileSelected === null) {
      await sendTextMessage();
    }
    //2. Text message with file => fileSelected === true && message == true
    if (fileSelected && message.length > 0) {
      const processedFilePath = processFile();
      await uploadFile(processedFilePath, fileSelected);
      await sendTextMessage(processedFilePath);
      setFileSelected(null);
    }
    //3. File message  => message === ''
    if (fileSelected && message.length === 0) {
      const processedFilePath = processFile();
      await uploadFile(processedFilePath, fileSelected);
      const { data, error } = await supabase.from("messages").insert([
        {
          chatId: currentChat?.id,
          // text: message,
          userId:
            "cccde327-56fc-4624-a4a1-880abc20daa9" /*'fd6acfe8-31d5-41a2-9194-c24d25490d41'*/,
          pending: true,
          image: processedFilePath,
        },
      ]);
      data && setMessage("");
      setFileSelected(null);
    }
  };

  const recordMessage = () => console.log("Make new voice note");

  return (
    <div className={classes.mainroot}>
      <CssBaseline />
      <Container
        component="main"
        className={classes.main}
        maxWidth={false}
        disableGutters
      >
        <Header src={currentChat?.photo} name={currentChat?.name} />

        <Grid item container className={classes.messages_area}>
          {" "}
          {/** Messages area */}
          <Grid
            item
            container
            direction="column-reverse"
            alignItems="flex-end"
            xs
          >
            {chatMessages.map((el) => {
              return el.userId == user?.id ? (
                <Grid
                  item
                  key={el._id}
                  style={{ marginTop: 17, marginRight: "auto" }}
                >
                  <SenderMessageBox message={el} />
                </Grid>
              ) : (
                <Grid item style={{ marginTop: 17 }} key={el._id}>
                  <RecieverMessageBox message={el} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Container>
      <footer className={classes.footer}>
        <Container maxWidth={false} disableGutters={true}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item>
              <IconButton color="inherit">
                <MoodIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                onClick={() => toggleAttachments(!attachments)}
                color="inherit"
                aria-label="upload picture"
                component="span"
              >
                <AttachFileSharpIcon />
              </IconButton>
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <SearchBar
                placeholder="Type a message"
                // onRequestSearch={() => console.log('Searching...')}
                closeIcon={
                  <ClearIcon style={{ display: "none", opacity: 0 }} />
                }
                searchIcon={
                  <SearchIcon style={{ display: "none", opacity: 0 }} />
                }
                onChange={(newValue) => setMessage(newValue)}
                value={message}
                className={classes.searchChat}
              />
            </Grid>
            <Grid item>
              <IconButton
                color="inherit"
                onClick={(event) => {
                  event.preventDefault();
                  message.length > 0 || fileSelected
                    ? sendMessge()
                    : recordMessage();
                }}
              >
                {message.length > 0 || fileSelected ? (
                  <SendIcon />
                ) : (
                  <MicIcon />
                )}
              </IconButton>
            </Grid>
          </Grid>

          <Fade in={attachments}>
            <Grid
              container
              direction="column"
              className={classes.fab}
              spacing={2}
            >
              <input
                accept="image/*"
                className={classes.input}
                onChange={(e) => {
                  if (e.target.files) {
                    setFileSelected(e.target.files[0]);
                    console.log(fileSelected);
                  }
                }}
                ref={ref1}
                type="file"
              />
              <Grid item>
                <Avatar component="button" className={classes.person}>
                  <PersonIcon fontSize="large" style={{ color: "white" }} />
                </Avatar>
              </Grid>
              <Grid item>
                <Avatar
                  onClick={() => ref1.current?.click()}
                  component="button"
                  className={classes.document}
                >
                  <InsertDriveFileIcon
                    fontSize="large"
                    style={{ color: "white" }}
                  />
                </Avatar>
              </Grid>
              <Grid item>
                <Avatar component="button" className={classes.camera}>
                  <CameraAltIcon fontSize="large" style={{ color: "white" }} />{" "}
                </Avatar>
              </Grid>
              <Grid item>
                <Avatar
                  component="button"
                  onClick={() => ref1.current?.click()}
                  className={classes.image}
                >
                  <PanoramaIcon fontSize="large" style={{ color: "white" }} />
                </Avatar>
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </footer>
      <input
        accept="image/*"
        className={classes.input}
        id="icon-button-file"
        type="file"
      />
    </div>
  );
};

export default Chatarea;
