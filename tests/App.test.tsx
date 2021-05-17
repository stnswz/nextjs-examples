import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import InputBar from '../components/InputBar'

test('Renders InputBar element', () => {
  render(<InputBar sendData={(s:string) => {}} />)
  const element = screen.getByTestId('text-input-field')
  expect(element).toBeInTheDocument()
})

/*
test('Renders for testing text-input element', () => { 
  render(<Header inputKeyPress={() => {}} />)

  const inputField = screen.getByTestId('q-input')
  const inputText = 'test-input-text'
  userEvent.type( inputField, inputText )
  expect(inputField).toHaveValue(inputText)
})

test('Renders for existing PriviewBox elements', () => { 
  const videoItems: Array<IVideoItem> = [
    {
      thumb: "1.jpg",
      title: "Title 1",
      description: "Description 1",
      id: "Id1",
    },
    {
      thumb: "2.jpg",
      title: "Title 2",
      description: "Description 2",
      id: "Id1",
    }
  ]

  render(<SearchResult videoItems={videoItems} setVideoId={() => {}} />)

  expect(screen.getByText(/Title 1/)).toBeInTheDocument();
  expect(screen.getByText(/Description 1/)).toBeInTheDocument();
  expect(screen.getByText(/Title 2/)).toBeInTheDocument();
  expect(screen.getByText(/Description 2/)).toBeInTheDocument();
})
*/