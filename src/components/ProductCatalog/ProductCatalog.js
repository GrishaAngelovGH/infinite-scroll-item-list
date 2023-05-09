import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchItems } from 'slices/itemsSlice'

import { Col, Row } from 'antd'

import ProductItem from 'components/ProductCatalog/ProductItem'

import './ProductCatalog.scss'

const ProductCatalog = () => {
  const items = useSelector((state) => Object.values(state.items))
  const dispatch = useDispatch()

  const targetRef = useRef()

  const options = {
    root: null, // watch for intersection relative to the device's viewport
    rootMargin: '0px',
    threshold: 0.5
  }

  const observer = new IntersectionObserver(entries => {
    const [entry] = entries

    entry.isIntersecting && dispatch(fetchItems())
  }, options)

  const createRows = items => {
    let itemsCpy = [...items]
    const pages = []

    while (itemsCpy.length) {
      const page = itemsCpy.splice(0, 3)
      pages.push(page)
    }

    return pages
  }

  useEffect(() => {
    dispatch(fetchItems())
  }, [])

  useEffect(() => {
    const currentRef = targetRef.current

    currentRef && observer.observe(currentRef)

    return () => {
      currentRef && observer.unobserve(currentRef)
    }
  }, [items])

  const lastItemId = items[items.length - 1]?.id

  return (
    <Row className='product-catalog'>
      <Col span={24}>
        {
          createRows(items).map((row, i) => (
            <Row key={i}>
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