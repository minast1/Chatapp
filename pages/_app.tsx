//import '../styles/globals.css'
import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../lib/theme';
import { AppProps } from 'next/app';
import { Provider , createStore} from '../lib/authStore';
import { useStore } from '../lib/sessionStore';
import { supabase } from '../lib/supabaseClient';
import router from 'next/router';
import { AuthSession } from '@supabase/supabase-js'
import { Box, Container } from '@material-ui/core';




 const MyApp: FC<AppProps>  = ({ Component, pageProps }: AppProps) => {
  
   const Usession = useStore(state => state.Usession);
   const setSession = useStore(state => state.setSession);

   React.useEffect(() => {
     const userSession = supabase.auth.session();

     if (!userSession) {
          router.push('/')
     } else {
       setSession(userSession)
     };

     supabase.auth.onAuthStateChange((_event: string, session: AuthSession | null) => {
       if (!session) {
         router.push('/');
       } else {
         router.push('/home');
         setSession(session);
       }
      
     });
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);


  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

   //Protect the api route 
   if (pageProps.protected && !Usession) {
      return (
        <Container maxWidth="xs" style={{ marginTop: 170 }}>
          <Box display="flex" justifyContent="center" alignItems="center" mt={10}>
              <h1>Loading!....</h1>
          </Box>
             
        </Container> 
      )
      
    }

   return (
    <Provider createStore={createStore}>
    <React.Fragment>
      <Head>
        <title>WatsappClone</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
          <Component {...pageProps} />
      </ThemeProvider>
       </React.Fragment>
       </Provider>
  );
}

export default MyApp
