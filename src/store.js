import { configureStore } from '@reduxjs/toolkit'

import itemsReducer from 'slices/itemsSlice'
import filtersReducer from 'slices/filtersSlice'

const store = configureStore({
  reducer: {
    items: itemsReducer,
    filters: filtersReducer
  }
})

export const setupStore = preloadedState => {
  return configureStore({
    reducer: {
      items: itemsReducer,
      filters: filtersReducer
    },
    preloadedState
  })
}

export default store