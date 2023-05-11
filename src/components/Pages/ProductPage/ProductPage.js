import { Button, Col, Empty, Row, Tag } from 'antd'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import images from 'images'

import './ProductPage.scss'

export const ProductPage = ({ id }) => {
  const items = useSelector((state) => state.items)
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
      <Col xs={23} md={12} lg={8}>
        <img src={images[item.image]} width={400} height={300} />
      </Col>
      <Col xs={23} md={12} lg={12} className='product-description'>
        <Tag color='#108ee9'>
          <h1 className='title'>{item.title}</h1>
        </Tag>

        <h1 className='price'>${item.price}</h1>
        <h3>{item.description}</h3>

        <Link to='/'>
          <Button>Go Back</Button>
        </Link>
      </Col>
    </Row>
  )
}

export default ProductPage