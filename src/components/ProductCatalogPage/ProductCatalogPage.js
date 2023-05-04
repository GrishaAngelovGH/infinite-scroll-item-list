import Header from 'components/Header'
import Layout from 'components/Layout'
import ProductCatalog from 'components/ProductCatalog'

const ProductCatalogPage = () => (
  <Layout
    header={<Header />}
    content={<ProductCatalog />}
  />
)

export default ProductCatalogPage