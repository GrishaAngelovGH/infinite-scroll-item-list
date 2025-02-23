import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'

import { render, waitFor } from '@testing-library/react'

import Layout from './Layout'

test('should render Layout component', async () => {
  await waitFor(() => {
    const view = render(
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <Layout
                header={<div>Header</div>}
                content={<div>Content</div>}
              />
            }
          />
        </Routes>
      </Router>
    )

    expect(view).toMatchSnapshot()
  })
})