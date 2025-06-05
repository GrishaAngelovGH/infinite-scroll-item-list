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

export const selectItems = (state) => state.items
const selectFilters = (state) => state.filters

export const selectItemValues = createSelector(
  [selectItems],
  (items) => Object.values(items)
)

export const selectFavoriteItems = createSelector(
  [selectItemValues],
  (items) => items.filter(item => item.isFavorite)
)

const selectFilteredFavoriteItems = createSelector(
  [selectFavoriteItems, selectFilters],
  (favoriteItems, filters) => {
    const { criteria, price } = filters
    const lowerCaseCriteria = criteria.toLowerCase()

    return favoriteItems
      .filter(item => item.title.toLowerCase().includes(lowerCaseCriteria))
      .filter(item => item.price <= price)
  }
)

export const selectItemRows = createSelector(
  [selectItemValues],
  (items) => createRows(items)
)

export const selectFavoriteItemRowsByFilter = createSelector(
  [selectFilteredFavoriteItems],
  (filteredItems) => createRows(filteredItems)
)