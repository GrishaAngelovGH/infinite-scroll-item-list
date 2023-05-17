import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  criteria: '',
  price: 1000
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    applyCriteriaFilter: (state, { payload }) => {
      state.criteria = payload
      return state
    },
    applyPriceFilter: (state, { payload }) => {
      state.price = payload
      return state
    },
    clearFilters: (state) => {
      state.criteria = ''
      state.price = 1000

      return state
    }
  }
})

export const { applyCriteriaFilter, applyPriceFilter, clearFilters } = filtersSlice.actions

export default filtersSlice.reducer