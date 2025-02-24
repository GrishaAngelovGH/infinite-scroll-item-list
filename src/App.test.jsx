import { render, waitFor } from '@testing-library/react'

import { Provider } from 'react-redux'

import App from './App'

test('should render App component', async () => {
  await waitFor(() => {
    const view = render(
      <Provider store={globalThis.mockStore}>
        <App />
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })
})