import { render, waitFor } from '@testing-library/react'

import { Provider } from 'react-redux'

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'

import Products from './Products'

test('should render Products component', async () => {
  await waitFor(() => {
    const view = render(
      <Provider store={globalThis.mockStore}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<Products />}
            />
          </Routes>
        </Router>
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })
})
