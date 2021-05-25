import { Typography, Box } from '@material-ui/core/'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import PublicIcon from '@material-ui/icons/Public';
import { makeStyles } from '@material-ui/core'
import { ICountry } from '../../components/TypeDefinitions'

const useStyles = makeStyles((theme) => ({
  contentBox: {
    marginTop: theme.spacing(2),
    width: '100%',
    textAlign: 'left',
    backgroundColor: '#eee',
    paddingLeft: theme.spacing(1),
  },
  countryHeadline: {
    marginLeft: -theme.spacing(1),
  },
  countryBody: {
    marginTop: theme.spacing(1),
  }
}))

export default function CountryViewBox(country: ICountry) {
  const classes = useStyles()

  function hasStates(states: Array<any>): boolean {
    return states && states.length > 0
  }

  function getLanguages(languages:Array<any>): string {
    let lang = ''
    for(let i=0; i<languages.length; i++) {
      lang += languages[i].name + ' (' + languages[i].native + ')'
      if(i < languages.length-1) {
        lang += ' / '
      }
    }
    return lang
  }

  return(
    <Box component="div" className={classes.contentBox}>
      <Typography component="h1" variant="h6" className={classes.countryHeadline}>
        {country.name} {country.emoji} 
      </Typography>
      <Typography component="h2" variant="subtitle1">
        Continent: {country.continent.name}
      </Typography>
      <Typography component="div" variant="subtitle2">
        Capital: {country.capital}
      </Typography>

      <Typography component="div" variant="body1" className={classes.countryBody}>
        Language: {getLanguages(country.languages)} <br />
        Currency: {country.currency} <br />
        States: {!hasStates(country.states) ? 'None' : <br />} 
        <List>
          {country.states.map( item => 
            <ListItem>
              <ListItemIcon>
                <PublicIcon style={{minWidth: 40}}/>
              </ListItemIcon>
              <ListItemText
                primary={item.name} 
              />
            </ListItem>
          )}
        </List>
      </Typography>
    </Box>
  )
}
