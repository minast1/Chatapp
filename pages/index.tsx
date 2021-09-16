import Head from 'next/head';
import { Box, makeStyles, Container } from '@material-ui/core';
import Auth from '../components/Auth';




const useStyles = makeStyles((theme) => ({
  main: {
    // display: 'flex',
    //flex: 1,
    margin: '60px 60px 60px 60px',
    // flexDirection: 'row'
  },
  avatar: {
    // backgroundColor: red[500],
  },
  icon: {
    marginRight: '10px',

  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 0
    //flex: 1
  }
}))


export default function Home() {
  const classes = useStyles()
  return (
  
      <Container maxWidth={false} disableGutters>
          <Auth />
      </Container>

  )
}
