import { Button, Col, Empty, Row, Tag } from 'antd'
import { useSelector } from 'react-redux'
import { selectItems } from 'selectors/itemRowsSelector'
import { Link } from 'react-router-dom'

import images from 'images'

import './ProductPage.scss'

export const ProductPage = ({ id }) => {
  const items = useSelector(selectItems)
  const item = items[id]

  if (!item) {
    return (
      <Row className='product-row'>

        <Col md={24}>
          <Empty
            description={
              <div>
                <h1 style={{ fontSize: 40 }}>
                  No item found
                </h1>
                <Link to='/'>
                  <Button>Go Back</Button>
                </Link>
              </div>
            }
          />
        </Col>
      </Row>
    )
  }

  return (
    <Row className='product-row'>
      <Col xs={23} md={12} lg={12} className='product-description'>
        <img src={images[item.image]} />

        <div className='summary'>
          <Tag color='#108ee9'>
            <h1 className='title'>{item.title}</h1>
          </Tag>

          <h1 className='price'>${item.price}</h1>

          <p>{item.description}</p>

          <Link to='/'>
            <Button>Go Back</Button>
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default ProductPage