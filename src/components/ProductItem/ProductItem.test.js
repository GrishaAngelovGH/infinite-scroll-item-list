import { render } from '@testing-library/react'

import store from 'mockstore'
import { Provider } from 'react-redux'

import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'

import ProductItem from './ProductItem'

test('should render ProductItem component not marked as favorite', () => {
  const view = render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <ProductItem
                id='123'
                title='Smartwatch'
                image='smartwatch.jpg'
                number={1}
                price={123.45}
                isFavorite={false}
              />
            }
          />
        </Routes>
      </Router>
    </Provider>
  )

  expect(view).toMatchSnapshot()
})

test('should render ProductItem component marked as favorite', () => {
  const view = render(
    <Provider store={store}>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <ProductItem
                id='123'
                title='Smartwatch'
                image='smartwatch.jpg'
                number={1}
                price={123.45}
                isFavorite={true}
              />
            }
          />
        </Routes>
      </Router>
    </Provider>
  )

  expect(view).toMatchSnapshot()
})