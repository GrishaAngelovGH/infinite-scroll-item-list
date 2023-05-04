import { useState } from 'react'
import { Link } from 'react-router-dom'

import { AppstoreOutlined, StarOutlined } from '@ant-design/icons'
import { Layout, Menu } from 'antd'

const { Sider } = Layout

const siderStyle = {
  paddingTop: 5
}

const items = [
  { label: 'Product Catalog', key: 1, icon: <Link to='/'><AppstoreOutlined /></Link> },
  { label: 'Favorites', key: 2, icon: <Link to='/favorites'><StarOutlined /></Link> }
]

const SiderWrapper = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      style={siderStyle}
    >
      <Menu
        theme='dark'
        defaultSelectedKeys={['1']}
        mode='inline'
        items={items}
      />
    </Sider>
  )
}

export default SiderWrapper