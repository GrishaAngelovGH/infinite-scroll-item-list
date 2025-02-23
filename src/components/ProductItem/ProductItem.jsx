import { forwardRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { saveAsFavorite } from 'slices/itemsSlice'

import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Card, Col } from 'antd'
const { Meta } = Card

import ProductNumber from 'components/ProductItem/ProductNumber'

import images from 'images'

const ProductItem = forwardRef(({ id, title, image, number, price, isFavorite }, ref) => {
  const dispatch = useDispatch()

  const handleSaveAsFavoriteClick = () => {
    dispatch(saveAsFavorite({ id, isFavorite: true }))
  }

  const handleRemoveAsFavoriteClick = () => {
    dispatch(saveAsFavorite({ id, isFavorite: false }))
  }

  const action = isFavorite ?
    (
      <StarFilled
        key='unfavorite'
        onClick={handleRemoveAsFavoriteClick}
      />
    ) :
    (
      <StarOutlined
        key='favorite'
        onClick={handleSaveAsFavoriteClick}
      />
    )

  const actions = [
    <ProductNumber key='num' number={number} />,
    action
  ]

  return (
    <Col sm={24} md={8} ref={ref}>
      <Card
        className='product-item'
        cover={
          <Link to={`/${id}`}>
            <img src={images[image]} />
          </Link>
        }
        actions={actions}
      >
        <Meta title={<div className='product-title'>{title}</div>} />
        <Meta title={`$${price}`} />
      </Card>
    </Col >
  )
})

export default ProductItem