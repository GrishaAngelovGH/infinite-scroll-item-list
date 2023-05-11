import Header from 'components/Header'
import Layout from 'components/Layout'
import ProductCatalog from 'components/ProductCatalogPage/ProductCatalog'
import Footer from 'components/Footer'

const ProductCatalogPage = () => (
  <Layout
    header={<Header />}
    content={<ProductCatalog />}
    footer={<Footer />}
  />
)

export default ProductCatalogPage