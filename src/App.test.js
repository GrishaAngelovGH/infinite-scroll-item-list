import { render, waitFor } from '@testing-library/react'

import store from 'mockstore'
import { Provider } from 'react-redux'

import App from './App'

test('should render App component', async () => {
  await waitFor(() => {
    const view = render(
      <Provider store={store}>
        <App />
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })
})