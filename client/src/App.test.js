import React from 'react';
import App from './App';
import {render, waitForElement, fireEvent} from 'react-testing-library';
import Dashboard from './components/Dashboard';
import Display from './components/Display';
import 'jest-dom/extend-expect';

describe('<App/>', () => {
  it('renders', () => {
    render(<App />);
  })
})

describe('<Display/>', () => {
  it('should render Strikes and Balls text', () => {
    const {getByText} = render(<Display/>)
    getByText(/Strikes/i);
    getByText(/Balls/i);
  })
  it('should render correct amounts of balls', async () => {
    const { getByText } = render(<Display balls={2} strikes={1} />);

    await waitForElement(() => getByText(/Balls: 2/));
  })
  it('should render correct amounts of strikes', async () => {
    const { getByText } = render(<Display balls={2} strikes={1} />);

    await waitForElement(() => getByText(/Strikes: 1/));
  })
})

describe('<Dashboard />', () => {
  it('should have clickable buttons', () => {
    const mockFunc = jest.fn()
    // you can use any of 4 buttons it is currently testing recordStrike props' Strike button
    const { getByTestId } = render(<Dashboard recordStrike={mockFunc}/>);
    const record = getByTestId('strike');
    fireEvent.click(record);
  })
})