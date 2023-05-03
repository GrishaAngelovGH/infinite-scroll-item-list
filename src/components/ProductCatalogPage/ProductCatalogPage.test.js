import { render } from '@testing-library/react'

import ProductCatalogPage from './ProductCatalogPage'

test('should render ProductCatalogPage component', () => {
  const view = render(<ProductCatalogPage />)

  expect(view).toMatchSnapshot()
})