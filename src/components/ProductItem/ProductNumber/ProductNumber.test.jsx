import { render } from '@testing-library/react'

import ProductNumber from './ProductNumber'

test('should render ProductNumber component', () => {
  const view = render(<ProductNumber number={10} />)

  expect(view).toMatchSnapshot()
})