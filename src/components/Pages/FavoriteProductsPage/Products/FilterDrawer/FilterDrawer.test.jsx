import { render } from '@testing-library/react'

import { Provider } from 'react-redux'

import FilterDrawer from './FilterDrawer'

test('should render FilterDrawer component', () => {
  const view = render(
    <Provider store={globalThis.mockStore}>
      <FilterDrawer open={true} />
    </Provider>
  )

  expect(view).toMatchSnapshot()
})