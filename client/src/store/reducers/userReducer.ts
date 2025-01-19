import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isAuthorized: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setIsAuthorized(state, action: PayloadAction<boolean>) {
            state.isAuthorized = action.payload;
        }
    }
})

export const userReducer = userSlice.reducer
export const userActions = userSlice.actions
export const {setIsAuthorized} = userActions