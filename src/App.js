import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import ProductCatalogPage from './components/ProductCatalogPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductCatalogPage />} />
      </Routes>
    </Router>
  )
}

export default App
