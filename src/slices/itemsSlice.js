import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {}

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await axios.get('/items')
  return response.data
})

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    saveAsFavorite: (state, { payload: { id, isFavorite } }) => {
      const stateValue = JSON.parse(JSON.stringify(state))
      const newState = { ...stateValue }
      newState[id].isFavorite = isFavorite
      return newState
    }
  },
  extraReducers(builder) {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        const stateValue = JSON.parse(JSON.stringify(state))
        const newState = { ...stateValue }

        action.payload.items.forEach(v => {
          newState[v.id] = v
        })

        return (state = newState)
      })
  }
})

export const { saveAsFavorite } = itemsSlice.actions

export default itemsSlice.reducer