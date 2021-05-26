import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import renderer from 'react-test-renderer'
import InputBar from '../components/InputBar'
import CountrySelectBox from '../components/apollo/CountrySelectBox'
import CountryViewBox from '../components/apollo/CountryViewBox'
import { IBasicCountry, ICountry } from '../components/TypeDefinitions'

describe('Loading Site Components', () => {
  test('Renders InputBar', () => {
    render(<InputBar sendData={(s:string) => {}} />)
    const element = screen.getByTestId('text-input-field')
    expect(element).toBeInTheDocument()
  })
})

// Snapshot Test
describe('Apollo Site Components', () => {
  test('Renders CountrySelectBox', () => {
    const countries: Array<IBasicCountry> = [
      { name: 'Name1', code: 'Code1', emoji: 'Emoji1' },
      { name: 'Name2', code: 'Code2', emoji: 'Emoji2' }
    ]
    const componentTree = renderer.create(<CountrySelectBox countries={countries} countrySelected={(s:string) => {}} />).toJSON();
    expect(componentTree).toMatchSnapshot();
  })

  test('Renders CountryViewBox', () => {
    const country: ICountry = {
      name: 'Name1',
      code: 'Code1',
      emoji: 'Emoji1',
      capital: 'Berlin',
      currency: 'EUR',
      languages: [{
        name: 'German',
        native: 'Deutsch',
      }],
      states: [{
        name: 'StateName1',
        code: 'StateCode1',
      }],
      continent: {
        name: 'Europe',
      }
    }
    const componentTree = renderer.create(<CountryViewBox {...country} />).toJSON();
    expect(componentTree).toMatchSnapshot();
  })
})