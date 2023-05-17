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

export const selectFavoriteItemRowsByFilter = createSelector(
  (state) => state,
  (state) => {
    const criteria = state.filters.criteria.toLowerCase()
    const price = state.filters.price

    const favoriteItems = Object.values(state.items).filter(v => v.isFavorite)

    const filteredItems = favoriteItems
      .filter(v => v.title.toLowerCase().includes(criteria))
      .filter(v => v.price <= price)

    return createRows(filteredItems)
  }
)