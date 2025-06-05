import { useSelector } from 'react-redux'
import { selectItemValues, selectFavoriteItems } from 'selectors/itemRowsSelector'

import { StarFilled, TagsFilled } from '@ant-design/icons'
import { Tooltip } from 'antd'

import './Footer.scss'

const Footer = () => {
  const items = useSelector(selectItemValues)
  const favorites = useSelector(selectFavoriteItems)

  return (
    <div className='footer'>
      <Tooltip title='Fetched Items' placement='left'>
        <h1><TagsFilled style={{ fontSize: 30, paddingRight: 10 }} /> {items.length}</h1>
      </Tooltip>

      <Tooltip title='Favorite Items' placement='right'>
        <h1><StarFilled style={{ fontSize: 30, paddingRight: 10 }} /> {favorites.length}</h1>
      </Tooltip>
    </div>
  )
}

export default Footer