import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface filterState {
    query: string;
    sort: string;
}

const initialState: filterState = {
    query: '',
    sort: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },

        setSort(state, action: PayloadAction<string>) {
            state.sort = action.payload;
        }
    }
})

export const filterReducer = filterSlice.reducer;
export const {setSort, setQuery} = filterSlice.actions;
