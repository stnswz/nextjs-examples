import { useState } from 'react'
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core/'
import { makeStyles } from '@material-ui/core'
import { IBasicCountry } from '../../components/TypeDefinitions'

interface CSBProps {
  countries: Array<IBasicCountry>,
  countrySelected: (s:string) => void
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 400,
    textAlign: 'left'
  }
}))

export default function CountrySelectBox({countries, countrySelected}: CSBProps) {
  const classes = useStyles()

  const [countryCode, setCountryCode] = useState('')

  const onChange = (event: any) => {
    console.log("Selected: " + event.target.value)
    setCountryCode(event.target.value);
    countrySelected(event.target.value)
  }

  return (
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
        
        {countries && countries.map(item => (
          <MenuItem key={item.code} value={item.code}>
            {item.emoji} {item.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}