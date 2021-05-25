export interface IBasicCountry {
  name: string,
  code: string,
  emoji: string
}

export interface ICountry extends IBasicCountry {
  name: string,
  code: string,
  emoji: string,
  capital: string,
  currency: string,
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