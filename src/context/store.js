import { configureStore } from '@reduxjs/toolkit'
import wishiesSlice from './wishiesSlice'

export const store = configureStore({
  reducer: {
    wishes: wishiesSlice
  }
})