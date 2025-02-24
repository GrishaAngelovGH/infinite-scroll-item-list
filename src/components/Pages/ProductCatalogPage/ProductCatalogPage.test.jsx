import { render, waitFor } from '@testing-library/react'

import { Provider } from 'react-redux'

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'

import ProductCatalogPage from './ProductCatalogPage'

test('should render ProductCatalogPage component', async () => {
  await waitFor(() => {
    const view = render(
      <Provider store={mockStore}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<ProductCatalogPage />}
            />
          </Routes>
        </Router>
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })
})