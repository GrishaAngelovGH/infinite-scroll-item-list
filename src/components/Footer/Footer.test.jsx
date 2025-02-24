import { render } from '@testing-library/react'

import { Provider } from 'react-redux'

import Footer from './Footer'

test('should render Footer component', () => {
  const view = render(
    <Provider store={globalThis.mockStore}>
      <Footer />
    </Provider>
  )

  expect(view).toMatchSnapshot()
})