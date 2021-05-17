import Head from 'next/head'
import { Typography, Box, LinearProgress, Link } from '@material-ui/core/';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core/';
import { useState, MouseEvent } from 'react'
import useDataLoadAPI from '../components/hooks/useDataLoadAPI'


const useStyles = makeStyles((theme) => ({
  loaderBox: {
    width: '100%',
    height: 10
  },
  inputBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2)

  },
  textField: {
    width: '100%'
  },
  btn: {
    marginLeft: 5,
    whiteSpace: 'nowrap'
  }, 
  resultList: {
    width: 500,
  },
  listItemTextPrimary: {
    fontWeight: 'bold',
  }
}))

export default function Loading() {
  const classes = useStyles()
  const [text, setText] = useState('')

  const url = 'https://hn.algolia.com/api/v1/search'
  const [{responseData, searchText, isLoading, isError}, setSearchText] = useDataLoadAPI(url, '')

  const onClick = (ev: MouseEvent) => {
    setSearchText(text)
  }


  return (
    <>
      <Head>
        <title>Loading Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component='div' className={classes.loaderBox}>
        {isLoading && <LinearProgress />}
      </Box>

      <Typography component="h3" variant="h3">
        Loading Example
      </Typography>

      <Box component='div' className={classes.inputBox}>
        <TextField className={classes.textField} label="Add input text" variant="outlined" size='small' value={text} onChange={ev => setText(ev.target.value)} />
        <Button className={classes.btn} onClick={onClick} variant="contained" color="primary" disableElevation>
          suchen
        </Button>
      </Box>

      <br />

      {isError && <div>Loading Error: Daten konnten nicht geladen werden.</div>}

      <List className={classes.resultList}>
        {responseData && responseData.hits.map((item: any) => (
          <ListItem key={item.objectID} alignItems="flex-start" dense>
            <ListItemText
              classes={{primary: classes.listItemTextPrimary}}
              primary={item.author + ' at: ' + item.created_at}
              secondary={<Link href={item.url} target='_blank' rel='noreferer'>{item.title}</Link>}
            />
          </ListItem>
        ))}
      </List>

    </>
  )
}
