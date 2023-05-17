import { createSelector } from 'reselect'

const createRows = items => {
  let itemsCpy = [...items]
  const rows = []

  while (itemsCpy.length) {
    const row = itemsCpy.splice(0, 3)
    rows.push(row)
  }

  return rows
}

export const selectItemRows = createSelector(
  (state) => state.items,
  (items) => createRows(Object.values(items))
)

export const selectFavoriteItemRows = createSelector(
  (state) => state.items,
  (items) => {
    const arr = Object.values(items)
    if (!arr.length) return []

    const favoiteItems = arr.filter(v => v.isFavorite)
    return createRows(favoiteItems)
  }
)

export const selectFavoriteItemRowsByCriteria = createSelector(
  (state) => state,
  (state) => {
    const criteria = state.filters.criteria.toLowerCase()
    const favoriteItems = Object.values(state.items).filter(v => v.isFavorite)
    const filteredItems = favoriteItems.filter(v => v.title.toLowerCase().includes(criteria))

    return createRows(filteredItems)
  }
)