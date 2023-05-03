import { render } from '@testing-library/react'

import App from './App'

test('should render component', () => {
  const view = render(<App />)

  expect(view).toMatchSnapshot()
})