import { useState } from 'react'
import Drawer from '@material-ui/core/Drawer'
import { List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core/'
import { Menu as MenuIcon, HourglassEmpty, Home } from '@material-ui/icons/'
import IconButton from '@material-ui/core/IconButton'
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
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen, 
      }),
    },
    drawerClosed: {
      width: drawerClosedWith,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      })
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
    </>
  )
}