import { render } from '@testing-library/react'

import store from 'mockstore'
import { Provider } from 'react-redux'

import Footer from './Footer'

test('should render Footer component', () => {
  const view = render(
    <Provider store={store}>
      <Footer />
    </Provider>
  )

  expect(view).toMatchSnapshot()
})