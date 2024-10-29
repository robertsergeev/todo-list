import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    displayed: false,
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        changeModalVisibility(state, action: PayloadAction<boolean>) {
            state.displayed = action.payload;
        }
    }
})

export const modalReducer = modalSlice.reducer;
export const {changeModalVisibility} = modalSlice.actions