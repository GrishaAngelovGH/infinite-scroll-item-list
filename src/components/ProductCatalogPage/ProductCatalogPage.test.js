import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'

import { render, waitFor } from '@testing-library/react'

import ProductCatalogPage from './ProductCatalogPage'

test('should render ProductCatalogPage component', async () => {
  await waitFor(() => {
    const view = render(
      <Router>
        <Routes>
          <Route
            path='/'
            element={<ProductCatalogPage />}
          />
        </Routes>
      </Router>
    )

    expect(view).toMatchSnapshot()
  })
})