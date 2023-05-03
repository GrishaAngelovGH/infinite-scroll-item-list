import { render } from '@testing-library/react'

import Layout from './Layout'

test('should render Layout component', () => {
  const view = render(
    <Layout
      content={<div>Content</div>}
    />
  )

  expect(view).toMatchSnapshot()
})