import { render } from '@testing-library/react'

import store from 'mockstore'
import { Provider } from 'react-redux'

import ProductCatalog from './ProductCatalog'

test('should render ProductCatalog component', () => {
  const view = render(
    <Provider store={store}>
      <ProductCatalog />
    </Provider>
  )

  expect(view).toMatchSnapshot()
})