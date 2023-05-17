import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearFilters } from 'slices/filtersSlice'

import { selectFavoriteItemRowsByFilter } from 'selectors/itemRowsSelector'

import { ControlFilled, CloseCircleFilled } from '@ant-design/icons'
import { Button, Col, Empty, Row, Tooltip } from 'antd'

import FilterDrawer from 'components/Pages/FavoriteProductsPage/Products/FilterDrawer'
import ProductItem from 'components/ProductItem'

import './Products.scss'

const Products = () => {
  const itemRows = useSelector(selectFavoriteItemRowsByFilter)
  const [open, setOpen] = useState(false)
  const dispatch = useDispatch()

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  const handleClearFilters = () => {
    dispatch(clearFilters())
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

      <Tooltip title='Clear All Filters'>
        <Button
          className='filter-btn'
          type='primary'
          danger
          onClick={handleClearFilters}
        >
          <CloseCircleFilled />
        </Button>
      </Tooltip>

      <FilterDrawer open={open} onClose={onClose} />

      <Col span={24}>
        {
          !itemRows.length && (
            <Empty
              description={
                <h1 style={{ fontSize: 40 }}>
                  No items found
                </h1>
              }
            />
          )
        }
        {
          itemRows.map((row, i) => (
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