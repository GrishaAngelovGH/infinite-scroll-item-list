import { useDispatch, useSelector } from 'react-redux'
import { applyCriteriaFilter } from 'slices/filtersSlice'

import { SearchOutlined } from '@ant-design/icons'
import { Drawer, Input } from 'antd'

const FilterDrawer = ({ open, onClose }) => {
  const criteria = useSelector((state) => state.filters.criteria)
  const dispatch = useDispatch()

  const handleSearch = ({ target }) => {
    dispatch(applyCriteriaFilter(target.value.toLowerCase()))
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
      <Input
        value={criteria}
        size='large'
        placeholder='Search'
        prefix={<SearchOutlined />}
        onChange={handleSearch}
      />
    </Drawer>

  )
}

export default FilterDrawer