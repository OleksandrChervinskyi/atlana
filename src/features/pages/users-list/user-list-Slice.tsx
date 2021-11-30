import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {IUser} from "../../../interfaces/user/user";

interface IInitialState {
    users: IUser[]
}

const initialState: IInitialState = {
    users: [],
}

//Async get User
export const fetchUser = createAsyncThunk(
    'users/fetchUser',
    async (userName: string) => {
        const response = await fetch(`https://api.github.com/users/` + userName)
        return (await response.json()) as IUser
    }
)

const UserListSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchUser.fulfilled,
            (state, {payload}) => {
                state.users = state.users.filter(user => user.id !== payload.id)
                state.users.push(payload)
            })
    }
})


export default UserListSlice.reducer