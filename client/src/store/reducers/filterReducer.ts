import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface filterState {
    query: string;
    filter: string;
}

const initialState: filterState = {
    query: '',
    filter: '',
}

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,
    reducers: {
        setQuery(state, action: PayloadAction<string>) {
            state.query = action.payload;
        },

        setFilter(state, action: PayloadAction<string>) {
            state.filter = action.payload;
        }
    }
})

export const filterReducer = filterSlice.reducer;
export const {setFilter, setQuery} = filterSlice.actions;
