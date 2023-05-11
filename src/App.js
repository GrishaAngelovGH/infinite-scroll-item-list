import { HashRouter as Router, Routes, Route, useParams } from 'react-router-dom'

import ProductCatalogPage from 'components/Pages/ProductCatalogPage'
import FavoriteProductsPage from 'components/Pages/FavoriteProductsPage'
import ProductPage from 'components/Pages/ProductPage'

function App() {
  const ProductPageRoute = () => {
    const { id } = useParams()

    return (
      <ProductPage id={id} />
    )
  }

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ProductCatalogPage />} />
        <Route path='/favorites' element={<FavoriteProductsPage />} />
        <Route path='/:id' element={<ProductPageRoute />} />
      </Routes>
    </Router>
  )
}

export default App
