import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Grid, Avatar, IconButton, } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: 75,
        backgroundColor: '#101318',
        paddingLeft: 20,
        
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },
   chatAvatar: {
        width: theme.spacing(7.0),
        height: theme.spacing(7.0),
    },
}));


type HeaderProps = {
  src?: string | Blob 
  name?: string
}

export default function Header({src, name} : HeaderProps) {
  const classes = useStyles();

  return (
            <Grid container  className={classes.root}>
                <Grid item container alignItems='center' xs={12} justifyContent="space-between">
                    <Grid item container xs={11} sm={8} spacing={7} alignItems="center"> {/*  Avatar and Name container*/}
                        <Grid item>
                         <Avatar src={src as string} className={ classes.chatAvatar}/>
                        </Grid>
                        <Grid>
                        <Grid item direction="column"  container spacing={1} >
                        <Typography>{name}</Typography>
                        <Typography noWrap={true}>LastSeen 2days ago</Typography>
                    </Grid>
                        </Grid>
                    </Grid>
                    <Grid item container xs sm={4}  justifyContent="flex-end">     {/**  Icons container */}
                        <Grid item >
                            <IconButton color="inherit"> 
                            <SearchIcon />
                        </IconButton>
                        </Grid>
                        <Grid item >

                            <IconButton aria-label="display more actions" color="inherit">
                            <MoreVertIcon />
                        </IconButton>
                        </Grid>
                      </Grid>
                   
          </Grid>
          </Grid>
  );
}