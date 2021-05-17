import Container from '@material-ui/core/Container'
import Drawer from './Drawer'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => {
  return {
    container: {
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
      height: '100%',
      overflowY: 'auto'
    },
    main: {
      // backgroundColor: '#ddd',
      height: '100%',
      paddingBottom: '100px'
    },
    footer: {
      width: '100%',
      height: '100px',
      marginTop: '-100px',
      borderTop: '1px solid #eaeaea',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fafafa;',
    },
    logo: {
      height: '1em',
      marginLeft: '0.5rem'
    }
  }
})

export default function Layout({children}: any) {
  const classes = useStyles()

  return (
    <>
      <Drawer />

      <main className={classes.main}>
        <Container maxWidth="md" className={classes.container}>
          {children}
        </Container>
      </main>

      <footer className={classes.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={classes.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}