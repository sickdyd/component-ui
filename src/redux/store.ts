import { configureStore } from '@reduxjs/toolkit'
import componentSlice from 'redux/slices/componentSlice'

export const store = configureStore({
  reducer: { componentSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
