import { useState } from 'react'
import { Link } from 'react-router-dom'

import { AppstoreOutlined, StarOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'

const { Sider } = Layout

const siderStyle = {
  paddingTop: 5
}

const items = [
  { label: <Link to='/'>Product Catalog</Link>, key: 1, icon: <AppstoreOutlined /> },
  { label: <Link to='/favorites'>Favorites</Link>, key: 2, icon: <StarOutlined /> }
]

const menuKeys = {
  '': '1',
  '#/': '1',
  '#/favorites': '2'
}

const SiderWrapper = () => {
  const [collapsed, setCollapsed] = useState(false)
  const defaultSelectedKey = menuKeys[window.location.hash]

  return (
    <Sider
      breakpoint='sm'
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={siderStyle}
    >
      <Menu
        theme='dark'
        defaultSelectedKeys={[defaultSelectedKey]}
        mode='inline'
        items={items}
      />
    </Sider>
  )
}

export default SiderWrapper