import { createSlice } from '@reduxjs/toolkit';

export const wishiesSlice = createSlice({
  name: 'Wishies',
  initialState: {
    value: []
  },
  reducers: {
    addToWishies(state, action) {
      state.value = [...state.value, action.payload]
    },
    removeFromWishies(state, action) {
      state.value = state.value.filter((el) => el._id !== action.payload._id)
    }
  }
})

export const { addToWishies, removeFromWishies } = wishiesSlice.actions
export default wishiesSlice.reducer