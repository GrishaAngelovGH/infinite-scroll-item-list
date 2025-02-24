import { useDispatch, useSelector } from 'react-redux'
import { applyCriteriaFilter, applyPriceFilter } from 'slices/filtersSlice'

import {
  selectFavoriteItemRowsByFilter,
  createRows
} from 'selectors/itemRowsSelector'

import { SearchOutlined } from '@ant-design/icons'
import { Drawer, Input, Slider, Tag } from 'antd'

import './FilterDrawer.scss'

const FilterDrawer = ({ open, onClose }) => {
  const criteria = useSelector((state) => state.filters.criteria)
  const price = useSelector((state) => state.filters.price)
  const filteredItemsCount = createRows(useSelector(selectFavoriteItemRowsByFilter)).flat().length
  const dispatch = useDispatch()

  const handleSearch = ({ target }) => {
    dispatch(applyCriteriaFilter(target.value.toLowerCase()))
  }

  const handlePriceChange = price => {
    dispatch(applyPriceFilter(price))
  }

  return (
    <Drawer
      title='Filter Favorite Product Items'
      placement={'left'}
      closable={true}
      onClose={onClose}
      open={open}
      key={'left'}
    >
      <h3 className='title'>Filter By Criteria</h3>
      <Input
        value={criteria}
        size='large'
        placeholder='Search'
        prefix={<SearchOutlined />}
        onChange={handleSearch}
      />

      <h3 className='title'>Filter By Price (${price})</h3>
      <Slider
        className='price-filter'
        marks={{ 100: '100', 1000: '1000' }}
        value={price}
        min={100}
        max={1000}
        step={50}
        onChange={handlePriceChange}
      />

      <div className='status'>
        <Tag color='#108ee9'>
          <h2>Found Items: {filteredItemsCount}</h2>
        </Tag>
      </div>
    </Drawer>
  )
}

export default FilterDrawer