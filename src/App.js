import { HashRouter as Router, Routes, Route } from 'react-router-dom'

import ProductCatalogPage from 'components/Pages/ProductCatalogPage'
import FavoriteProductsPage from 'components/Pages/FavoriteProductsPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductCatalogPage />} />
        <Route path='/favorites' element={<FavoriteProductsPage />} />
      </Routes>
    </Router>
  )
}

export default App
