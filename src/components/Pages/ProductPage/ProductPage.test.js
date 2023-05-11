import { render, waitFor } from '@testing-library/react'

import store from 'mockstore'
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
      <Provider store={store}>
        <Router>
          <Routes>
            <Route
              path='/'
              element={<ProductPage />}
            />
          </Routes>
        </Router>
      </Provider>
    )

    expect(view).toMatchSnapshot()
  })
})
