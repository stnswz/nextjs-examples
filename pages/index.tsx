import Head from 'next/head'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core'
//import styles from '../styles/Home.module.css'

const useStyles = makeStyles({
  code: {
    background: '#fafafa',
    borderRadius: '5px',
    padding: '0.75rem',
    fontSize: '1.1rem',
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  }
})

export default function Home() {
  const classes = useStyles()
  return (
    <>
      <Head>
        <title>Index Page</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Typography component="h3" variant="h3" className={classes.title}>
        Welcome to <Link href="https://nextjs.org">Next.js!</Link>
      </Typography>

      <Typography component="p" variant="body1">
        Get started by editing{' '}
        <code className={classes.code}>pages/index.js</code>
      </Typography>
    </>
  )
}
