import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout

import {
  layoutStyle,
  headerStyle,
  contentStyle,
  siderStyle,
  footerStyle
} from './styles'

const LayoutWrapper = ({ content }) => (
  <Layout style={layoutStyle}>
    <Sider style={siderStyle}>Sider</Sider>
    <Layout>
      <Header style={headerStyle}>Header</Header>
      <Content style={contentStyle}>{content}</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Layout>
)

export default LayoutWrapper