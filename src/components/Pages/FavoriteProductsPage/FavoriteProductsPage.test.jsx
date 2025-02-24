import { render, waitFor } from '@testing-library/react'

import { Provider } from 'react-redux'

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'

import FavoriteProductsPage from './FavoriteProductsPage'

test('should render FavoriteProductsPage component', async () => {
  await waitFor(() => {
    const view = render(
      <Provider store={globalThis.mockStore}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<FavoriteProductsPage />}
            />
          </Routes>
        </Router>
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })
})
