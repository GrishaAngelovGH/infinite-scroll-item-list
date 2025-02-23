import {
  Route,
  BrowserRouter as Router,
  Routes
} from 'react-router-dom'

import { render, waitFor } from '@testing-library/react'

import Sider from './Sider'

test('should render ApSiderp component', async () => {
  await waitFor(() => {
    const view = render(
      <Router>
        <Routes>
          <Route path='/' element={<Sider />} />
        </Routes>
      </Router>
    )

    expect(view).toMatchSnapshot()
  })
})