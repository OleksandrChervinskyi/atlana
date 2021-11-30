import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface IInitialState {
    searchInput: string
}

const initialState: IInitialState = {
    searchInput: ''
}

const SearchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setInput(state, action: PayloadAction<string>) {
            state.searchInput = action.payload
        }
    }
})

export const {setInput} = SearchSlice.actions
export default SearchSlice.reducer