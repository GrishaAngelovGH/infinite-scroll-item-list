import { render } from '@testing-library/react'

import { Provider } from 'react-redux'

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'

import ProductCatalog from './ProductCatalog'

test('should render ProductCatalog component', () => {
  const view = render(
    <Provider store={mockStore}>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<ProductCatalog />}
          />
        </Routes>
      </Router>
    </Provider>
  )

  expect(view).toMatchSnapshot()
})