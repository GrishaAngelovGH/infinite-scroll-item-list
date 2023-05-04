import { render, waitFor } from '@testing-library/react'

import App from './App'

test('should render App component', async () => {
  await waitFor(() => {
    const view = render(<App />)

    expect(view).toMatchSnapshot()
  })
})