import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../../interfaces/user/user";
import {IRepos} from "../../../interfaces/user/repos";

interface IInitialState {
    user: IUser | null
    repos: IRepos[]
}

const initialState: IInitialState = {
    user: null,
    repos: []
}

//Async get User
export const fetchUserById = createAsyncThunk(
    'users/fetchUserById',
    async (userId: number) => {
        const response = await fetch(`https://api.github.com/user/` + userId)
        return (await response.json()) as IUser
    }
)

// Get repos of user
export const fetchUsersRepos = createAsyncThunk(
    'users/fetchUsersRepos',
    async (userId: number) => {
        const response = await fetch(`https://api.github.com/user/` + userId + '/repos')
        return (await response.json()) as IRepos[]
    }
)

const UserListSlice = createSlice({
    name: 'userDetails',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.fulfilled,
            (state, {payload}) => {
                state.user = payload
            })
        builder.addCase(fetchUsersRepos.fulfilled,
            (state, {payload}) => {
                state.repos = payload
            })
    }
})


export default UserListSlice.reducer