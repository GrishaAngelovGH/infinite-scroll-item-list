import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = []

export const fetchItems = createAsyncThunk('items/fetchItems', async () => {
  const response = await axios.get('/items')
  return response.data
})

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchItems.fulfilled, (state, action) => {
        const stateValue = JSON.parse(JSON.stringify(state))

        return (state = [...stateValue, ...action.payload.items])
      })
  }
})

export default itemsSlice.reducer