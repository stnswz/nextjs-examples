export interface ICountries {
  name: string,
  code: string
}

export interface ICountry {
  name: string,
  code: string,
  capital: string,
  currency: string,
  emoji: string,
  languages: [{
    name: string,
    native: string,
  }],
  states: [{
    name: string,
    code: string,
  }],
  continent: {
    name: string,
  }
}