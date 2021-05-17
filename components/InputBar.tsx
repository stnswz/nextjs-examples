import { Box } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core'
import { TextField, Button } from '@material-ui/core/';
import { useState, MouseEvent } from 'react'

interface IInputBarProps {
  sendData: (s:string) => void
}

const useStyles = makeStyles((theme) => ({
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
  }
}))

export default function InputBar({sendData}: IInputBarProps) {
  const classes = useStyles()
  const [text, setText] = useState('')


  const onClick = (ev: MouseEvent) => {
    // setSearchText(text)
    sendData(text)
  }


  return (
    <Box component='div' className={classes.inputBox}>
      <TextField data-testid="text-input-field" className={classes.textField} label="Add input text" variant="outlined" size='small' value={text} onChange={ev => setText(ev.target.value)} />
      <Button className={classes.btn} onClick={onClick} variant="contained" color="primary" disableElevation>
        suchen
      </Button>
    </Box>
  )
}
