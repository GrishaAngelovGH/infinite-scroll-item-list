import { render } from '@testing-library/react'

import store from 'mockstore'
import { Provider } from 'react-redux'

import FilterDrawer from './FilterDrawer'

test('should render FilterDrawer component', () => {
  const view = render(
    <Provider store={store}>
      <FilterDrawer open={true} />
    </Provider>
  )

  expect(view).toMatchSnapshot()
})