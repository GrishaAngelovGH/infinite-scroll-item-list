import { render, waitFor } from '@testing-library/react'

import { Provider } from 'react-redux'

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'

import ProductPage from './ProductPage'

test('should render ProductPage component', async () => {
  await waitFor(() => {
    const view = render(
      <Provider store={globalThis.mockStore}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<ProductPage id={123} />}
            />
          </Routes>
        </Router>
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })
})

test('should render ProductPage component for non-existent item', async () => {
  await waitFor(() => {
    const view = render(
      <Provider store={globalThis.mockStore}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<ProductPage id={12345} />}
            />
          </Routes>
        </Router>
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })
})
