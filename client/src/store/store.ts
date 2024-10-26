import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "./reducers/todoReducer.ts";

export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    devTools: true,
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']