import { configureStore } from '@reduxjs/toolkit'
import reservationReducer  from './features/ReservationSlice'
import customerSlice from './features/CustomerSlice'

export const store = configureStore({
  reducer: {
    reservation: reservationReducer,
    customer: customerSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch