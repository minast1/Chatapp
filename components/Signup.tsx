 import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Paper } from '@material-ui/core';
import { useStore } from '../lib/authStore';
import CircularProgress from '@material-ui/core/CircularProgress';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Edmond Marfo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
        marginTop: theme.spacing(8),
        padding: theme.spacing(3),
        
         //border : '1px solid darkgray', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
       // backgroundColor : theme.palette.grey[100]
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
     margin: theme.spacing(3, 0, 2),
       color: 'white',
        background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
      boxShadow: '0 3px 5px 2px rgba(33, 203, 243, .3)',
        height: 45
  },
  linkStyles: {
    '&.MuiLink-button': {
      color: 'white',
      fontSize: 12,
    
    },
  },
   textFieldRoot: {
     
    }
}));

export default function SignUp() {
  const classes = useStyles();
const { setAuthView, error, loading, handleSignUp , setEmail, setPassword,email,password} = useStore();
 
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Paper className={classes.paper} elevation={5}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form className={classes.form} onSubmit={(e) => handleSignUp(e)}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            error={error.includes("email") ? true : false}
            helperText={error.includes("email")?"Email Address is Invalid" : ''}
            fullWidth
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            label="Email Address"
            className={classes.textFieldRoot}
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            error={error.includes("password") ? true : false}
            helperText={error.includes("password")?"Password is invalid" : ''}
            required
            defaultValue={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >{
              loading ? <CircularProgress color="inherit" size={20} /> :
                "SignUp"
          }
            
          </Button>
          <Grid container>
            <Grid item xs>
             
            </Grid>
            <Grid item>
              <Link href="#"
                variant="body2"
                component="button"
                underline="none"
                className={classes.linkStyles}
                onClick={(e) => {
                              e.preventDefault();
                              setAuthView('sign_in')
              }}>
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}