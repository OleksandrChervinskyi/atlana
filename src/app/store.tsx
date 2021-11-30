import {combineReducers, configureStore} from '@reduxjs/toolkit'
import searchSlice from '../features/pages/users-list/search/search-Slice'
import usersListSlice from '../features/pages/users-list/user-list-Slice'
import userDetailsSlice from '../features/pages/user-details/user-details-Slice'

export const store = configureStore({
    reducer: {
        usersListPage: combineReducers({
            search: searchSlice,
            users: usersListSlice
        }),
        userDetailsPage: userDetailsSlice
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch