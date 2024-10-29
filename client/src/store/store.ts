import {configureStore} from "@reduxjs/toolkit";
import {todoReducer} from "./reducers/todoReducer.ts";
import {modalReducer} from "./reducers/modalReducer.ts";

export const store = configureStore({
    reducer: {
        todo: todoReducer,
        modal: modalReducer,
    },
    devTools: true,
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']