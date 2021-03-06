import { AppProps } from 'next/app'
import { useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core'
import { ApolloProvider } from '@apollo/client/react'
import apolloClient from '../components/apollo/client'
import CssBaseline from '@material-ui/core/CssBaseline'
import Layout from '../components/layout/Layout'
import muiTheme from '../components/layout/theme';
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles: any = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      <Layout>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
