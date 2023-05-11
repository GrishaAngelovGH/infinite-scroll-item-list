import { useSelector } from 'react-redux'
import { selectFavoriteItemRows } from 'selectors/itemRowsSelector'

import { Col, Empty, Row } from 'antd'

import ProductItem from 'components/ProductItem'

const Products = () => {
  const itemsRows = useSelector(selectFavoriteItemRows)

  if (!itemsRows.length) {
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
      <Col span={24}>
        {
          itemsRows.map((row, i) => (
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