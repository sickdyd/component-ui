import { configureStore } from '@reduxjs/toolkit'
import componentSlice from 'redux/slices/componentSlice'

export const store = configureStore({
  reducer: { componentSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
