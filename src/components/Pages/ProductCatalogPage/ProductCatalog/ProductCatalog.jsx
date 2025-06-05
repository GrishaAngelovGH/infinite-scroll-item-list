import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectItemRows } from 'selectors/itemRowsSelector'

import { fetchItems } from 'slices/itemsSlice'

import { Col, Row } from 'antd'

import ProductItem from 'components/ProductItem'

import './ProductCatalog.scss'

const ProductCatalog = () => {
  const itemRows = useSelector(selectItemRows)
  const dispatch = useDispatch()

  const targetRef = useRef()

  const items = itemRows.flat()

  useEffect(() => {
    if (!items.length) {
      dispatch(fetchItems())
    }
  }, [dispatch, items.length])

  useEffect(() => {
    const options = {
      root: null, // watch for intersection relative to the device's viewport
      rootMargin: '0px',
      threshold: 0.5,
    }

    const observer = new IntersectionObserver(entries => {
      const [entry] = entries

      if (entry.isIntersecting) {
        dispatch(fetchItems())
      }
    }, options)

    const currentRef = targetRef.current

    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [items, dispatch])

  const lastItemId = items[items.length - 1]?.id

  return (
    <Row className='product-catalog'>
      <Col span={24}>
        {
          itemRows.map((row) => (
            <Row key={row[0].id}>
              {
                row.map(v => {
                  const ref = v.id === lastItemId ? targetRef : null

                  return (
                    <ProductItem
                      key={v.id}
                      ref={ref}
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

export default ProductCatalog