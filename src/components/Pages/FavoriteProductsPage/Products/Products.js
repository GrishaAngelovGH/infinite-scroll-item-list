import { useState } from 'react'
import { useSelector } from 'react-redux'
import {
  selectFavoriteItemRows,
  selectFavoriteItemRowsByCriteria
} from 'selectors/itemRowsSelector'

import { ControlFilled } from '@ant-design/icons'
import { Button, Col, Empty, Row, Tooltip } from 'antd'

import FilterDrawer from 'components/Pages/FavoriteProductsPage/Products/FilterDrawer'
import ProductItem from 'components/ProductItem'

import './Products.scss'

const Products = () => {
  const itemRows = useSelector(selectFavoriteItemRows)
  const filteredItemRows = useSelector(selectFavoriteItemRowsByCriteria)

  const [open, setOpen] = useState(false)

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const favoriteItemRows = !filteredItemRows.length ? itemRows : filteredItemRows

  if (!itemRows.length) {
    return (
      <Empty
        imageStyle={{
          marginTop: '10%',
        }}
        description={
          <h1 style={{ fontSize: 40 }}>
            No items found
          </h1>
        }
      />
    )
  }

  return (
    <Row className='product-catalog'>
      <Tooltip title='Filters'>
        <Button
          className='filter-btn'
          type='primary'
          onClick={showDrawer}
        >
          <ControlFilled />
        </Button>
      </Tooltip>

      <FilterDrawer open={open} onClose={onClose} />

      <Col span={24}>
        {
          favoriteItemRows.map((row, i) => (
            <Row key={i}>
              {
                row.map(v => {
                  return (
                    <ProductItem
                      key={v.id}
                      id={v.id}
                      title={v.title}
                      image={v.image}
                      number={v.number}
                      price={v.price}
                      isFavorite={v.isFavorite}
                    />
                  )
                })
              }
            </Row>
          ))
        }
      </Col>
    </Row>
  )
}

export default Products