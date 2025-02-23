import { Layout } from 'antd'
import Sider from 'components/Sider'

const { Header, Footer, Content } = Layout

import './Layout.scss'

const LayoutWrapper = ({ header, content, footer }) => (
  <Layout className='layout' hasSider={true}>
    <Sider />
    <Layout>
      <Header className='layout__header'>{header}</Header>
      <Content className='layout__content'>{content}</Content>
      <Footer className='layout__footer'>{footer}</Footer>
    </Layout>
  </Layout>
)

export default LayoutWrapper