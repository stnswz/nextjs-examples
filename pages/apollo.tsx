import Head from 'next/head'
import { useState } from 'react'
import { Typography, Box, LinearProgress } from '@material-ui/core/'
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core/'
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core/'
import PublicIcon from '@material-ui/icons/Public';
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { makeStyles } from '@material-ui/core'
import { ICountries, ICountry } from '../components/TypeDefinitions'

const useStyles = makeStyles((theme) => ({
  loaderBox: {
    width: '100%',
    height: 10
  }, 
  title: {
    marginBottom: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    textAlign: 'left'
  },
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

interface ICountriesData {
  countries: Array<ICountries>
}

interface ICountryData {
  country: ICountry
}

interface ICountryVars {
  code: string
}

const GET_Countries = gql`
  query Countries {
    countries {
      name
      code
    }
  }
`;

const GET_Country = gql`
  query Country($code: ID!) {
    country(code: $code) {
      name
      code
    	capital
    	currency
    	emoji
    	emojiU
    	languages {
        code
        name
        native
      }
    	states {
        code
        name
      }
    	continent {
        name
        countries {
          code
          name
        }
      }
    }
  }
`;

export default function Apollo() {
  const classes = useStyles()

  const [countryCode, setCountryCode] = useState('')
  const { loading, error, data: selectCountries } = useQuery<ICountriesData>(GET_Countries)
  const [startLoading, { loading: countryLoading, error: countryError, data: countryData }] = useLazyQuery<ICountryData, ICountryVars>(
    GET_Country, 
    {
    // fetchPolicy: "network-only"
    }
  );

  const onChange = (event: any) => {
    console.log("Selected: " + event.target.value)
    setCountryCode(event.target.value);
    startLoading({ variables: { code: event.target.value } })
  }

  function hasStates(states: Array<any>): boolean {
    return states && states.length > 0
  }

  return (
    <>
      <Head>
        <title>Apollo Example</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box component='div' className={classes.loaderBox}>
        {(loading || countryLoading) && <LinearProgress />}
      </Box>
      
      <Typography component="h3" variant="h3" className={classes.title}>
        Apollo Example
      </Typography>

      {error && <div>Error! {error.message}</div>}
      {countryError && <div>Error! {countryError.message}</div>}

      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="country-label">Country</InputLabel>
        <Select
          labelId="country-label"
          id="country"
          value={countryCode}
          onChange={onChange}
          label="Country"
        >
          
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          
          {selectCountries && selectCountries.countries.map(item => (
            <MenuItem key={item.code} value={item.code}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box component="div" className={classes.contentBox}>
        {(countryData && countryData.country) &&
          <>
            <Typography component="h1" variant="h6" className={classes.countryHeadline}>
              {countryData.country.name} {countryData.country.emoji} 
            </Typography>
            <Typography component="h2" variant="subtitle1">
              Continent: {countryData.country.continent.name}
            </Typography>
            <Typography component="div" variant="subtitle2">
              Capital: {countryData.country.capital}
            </Typography>

            <Typography component="div" variant="body1" className={classes.countryBody}>
              Language: {countryData.country.languages[0].name} ({countryData.country.languages[0].native}) <br />
              Currency: {countryData.country.currency} <br />
              States: {!hasStates(countryData.country.states) ? 'None' : <br />} 
              <List>
                {countryData.country.states.map( item => 
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
          </>
        }
      </Box>
    </>
  )
}
