import Layout from 'components/Layout'
import Header from 'components/Header'
import ProductCatalog from 'components/ProductCatalog'

const ProductCatalogPage = () => {
  return (
    <Layout
      header={<Header />}
      content={<ProductCatalog />}
    />
  )
}

export default ProductCatalogPage