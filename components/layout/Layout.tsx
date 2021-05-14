import { useState } from 'react'
import Container from '@material-ui/core/Container'
import Drawer from '@material-ui/core/Drawer'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core/'
import { Menu as MenuIcon, HourglassEmpty, Home } from '@material-ui/icons/'
import IconButton from '@material-ui/core/IconButton'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core'
import { useRouter } from 'next/router'

const drawerWidth = 240
const drawerClosedWith = 57

const useStyles = makeStyles((theme) => {
  return {
    menuButton: {
      width: 30,
      height: 30,
      marginLeft: 13
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen, 
      }),
    },
    drawerClosed: {
      flexShrink: 0,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: drawerClosedWith,
    },
    container: {
      backgroundColor: '#f5f5f5',
      textAlign: 'center',
      height: '100%'
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
    },
    listItemIconRoot: {
      minWidth: '40px'
    }
  }
})

export default function Layout({children}: any) {
  const classes = useStyles()
  const router = useRouter()

  const [isOpen, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen( (open) => !open )
  }

  const handleClick = (event: any, href: string) => {
    event.preventDefault()
    router.push(href)
  }
  
  return (
    <>
      <Drawer
        className={isOpen ? classes.drawer : classes.drawerClosed}
        variant="persistent"
        anchor="left"
        open={true}
        classes={{
          paper: isOpen ? classes.drawer : classes.drawerClosed
        }}
      >
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
        >
          <MenuIcon />
        </IconButton>
        <List>
          <ListItem button onClick={(ev) => handleClick(ev, "/")}>
            <ListItemIcon
              classes={{
                root: classes.listItemIconRoot,
              }}
            >
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={(ev) => handleClick(ev, "/loading")}>
            <ListItemIcon
              classes={{
                root: classes.listItemIconRoot,
              }}
            >
              <HourglassEmpty />
            </ListItemIcon>
            <ListItemText primary="Loading Example" />
          </ListItem>
        </List>
      </Drawer>
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