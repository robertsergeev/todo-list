import {fetchAllTodosPayload, ITodo, TodoState} from "../../types/todo.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAllTodos} from "../action-creators/fetchAllTodos.ts";

const initialState: TodoState = {
    todos: [],
    page: 1,
    limit: 10,
    totalTodos: 0,
    isLoading: false,
    error: null,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        addNewTodo(state, action: PayloadAction<ITodo>) {
            state.todos = [action.payload, ...state.todos]
        },

        setTodoChecked(state, action: PayloadAction<{ todo: ITodo, value: boolean }>) {
            state.todos = state.todos.filter(todo => {
                if(todo.id == action.payload.todo.id) {
                    todo.completed = action.payload.value;
                    return todo
                }
                return todo
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllTodos.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })

        builder.addCase(fetchAllTodos.fulfilled, (state, action: PayloadAction<fetchAllTodosPayload>) => {
            state.isLoading = false;
            state.todos = action.payload.todos;
            state.totalTodos = action.payload.totalTodos
        })

        builder.addCase(fetchAllTodos.rejected, (state, action) => {
            state.isLoading = false ;
            state.error = action.payload as string || 'unknown error';
        })
    }
})

export const todoReducer = todoSlice.reducer
export const todoActions = todoSlice.actions
export const {addNewTodo, setTodoChecked} = todoActions