//import '../styles/globals.css'
import React, { FC } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../lib/theme';
import { AppProps } from 'next/app';
import { Provider , createStore} from '../lib/authStore';



 const MyApp: FC<AppProps>  = ({ Component, pageProps }: AppProps) => {
  
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles?.parentElement?.removeChild(jssStyles);
    }
  }, []);

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
