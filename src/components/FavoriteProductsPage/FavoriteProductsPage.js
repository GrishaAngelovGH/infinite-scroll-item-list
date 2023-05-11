import Layout from 'components/Layout'
import Header from 'components/Header'
import Products from 'components/FavoriteProductsPage/Products'
import Footer from 'components/Footer'

const FavoriteProductsPage = () => (
  <Layout
    header={<Header />}
    content={<Products />}
    footer={<Footer />}
  />
)

export default FavoriteProductsPage