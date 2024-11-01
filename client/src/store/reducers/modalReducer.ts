import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export enum modalNames {
    createTodoModal,
    editTodoModal,
}

type modalName = modalNames.createTodoModal | modalNames.editTodoModal;

const initialState = {
    modals: {
        [modalNames.createTodoModal]: false,
        [modalNames.editTodoModal]: false,
    }
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        changeModalVisibility(state, action: PayloadAction<{ modalName: modalName, value: boolean }>) {
            state.modals[action.payload.modalName] = action.payload.value;
        }
    }
})

export const modalReducer = modalSlice.reducer;
export const {changeModalVisibility} = modalSlice.actions