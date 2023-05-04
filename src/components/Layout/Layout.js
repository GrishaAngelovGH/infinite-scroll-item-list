import { Layout } from 'antd'
import Sider from 'components/Sider'

const { Header, Footer, Content } = Layout

import {
  contentStyle,
  footerStyle,
  headerStyle,
  layoutStyle
} from './styles'

const LayoutWrapper = ({ header, content }) => (
  <Layout style={layoutStyle}>
    <Sider />
    <Layout>
      <Header style={headerStyle}>{header}</Header>
      <Content style={contentStyle}>{content}</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Layout>
)

export default LayoutWrapper