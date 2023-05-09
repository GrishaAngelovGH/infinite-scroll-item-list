import { render } from '@testing-library/react'

import store from 'mockstore'
import { Provider } from 'react-redux'

import ProductItem from './ProductItem'

test('should render ProductItem component not marked as favorite', () => {
  const view = render(
    <Provider store={store}>
      <ProductItem
        id='123'
        title='Smartwatch'
        image='smartwatch.jpg'
        number={1}
        price={123.45}
        isFavorite={false}
      />
    </Provider>
  )

  expect(view).toMatchSnapshot()
})

test('should render ProductItem component marked as favorite', () => {
  const view = render(
    <Provider store={store}>
      <ProductItem
        id='123'
        title='Smartwatch'
        image='smartwatch.jpg'
        number={1}
        price={123.45}
        isFavorite={true}
      />
    </Provider>
  )

  expect(view).toMatchSnapshot()
})