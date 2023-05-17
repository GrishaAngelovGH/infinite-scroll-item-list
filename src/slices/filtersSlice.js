import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  criteria: ''
}

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    applyCriteriaFilter: (state, { payload }) => {
      const stateValue = JSON.parse(JSON.stringify(state))

      stateValue.criteria = payload

      return (state = stateValue)
    }
  }
})

export const { applyCriteriaFilter } = filtersSlice.actions

export default filtersSlice.reducer