import { Layout } from 'antd'

const { Header, Footer, Sider, Content } = Layout

import {
  layoutStyle,
  headerStyle,
  contentStyle,
  siderStyle,
  footerStyle
} from './styles'

const LayoutWrapper = ({ header, content }) => (
  <Layout style={layoutStyle}>
    <Sider style={siderStyle}>Sider</Sider>
    <Layout>
      <Header style={headerStyle}>{header}</Header>
      <Content style={contentStyle}>{content}</Content>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Layout>
)

export default LayoutWrapper