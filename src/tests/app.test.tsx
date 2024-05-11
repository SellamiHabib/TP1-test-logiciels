import {render, screen} from '@testing-library/react'
import App from "../App.tsx";
import userEvent from '@testing-library/user-event';

test('renders learn react link', () => {
    render(<App/>)
    const headerElement = screen.getByRole('heading')
    expect(headerElement).toHaveTextContent('Vite + React')
})

test('renders count button', async () => {
    render(<App/>)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toHaveTextContent('count is 0')
})
test('render button click', async () => {
    const user = userEvent.setup();
    render(<App/>)
    const buttonElement = screen.getByRole('button')
    await user.click(buttonElement)
    expect(buttonElement).toHaveTextContent('count is 1')
})