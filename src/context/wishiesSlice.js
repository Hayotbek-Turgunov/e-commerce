import { createSlice } from '@reduxjs/toolkit';

export const wishiesSlice = createSlice({
  name: 'Wishies',
  initialState: {
    value: JSON.parse(localStorage.getItem("wishes")) || []
  },
  reducers: {
    addToWishies(state, action) {
      state.value = [...state.value, action.payload]
      localStorage.setItem("wishes", JSON.stringify(state.value))
    },
    removeFromWishies(state, action) {
      state.value = state.value.filter((el) => el._id !== action.payload._id)
    }
  }
})

export const { addToWishies, removeFromWishies } = wishiesSlice.actions
export default wishiesSlice.reducer