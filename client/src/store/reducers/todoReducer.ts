import {fetchAllTodosPayload, ITodo, TodoState} from "../../types/todo.ts";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchAllTodos} from "../action-creators/fetchAllTodos.ts";

const initialState: TodoState = {
    todos: [],
    currentTodo: null,
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
            state.todos = [action.payload, ...state.todos];
        },

        removeTodo(state, action: PayloadAction<ITodo>) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
        },

        setCurrentTodo(state, action: PayloadAction<ITodo | null>) {
            state.currentTodo = action.payload;
        },


        editTodo(state, action: PayloadAction<string>) {
            if(state.currentTodo !== null) {
                state.todos = state.todos.map(todo =>
                    todo.id === state.currentTodo!.id
                        ? {...todo, title: action.payload}
                        : todo
                )

            }

        },

        setTodoChecked(state, action: PayloadAction<{ todo: ITodo, value: boolean }>) {
            state.todos = state.todos.filter(todo => {
                if(todo.id == action.payload.todo.id) {
                    todo.completed = action.payload.value;
                    return todo;
                }
                return todo;
            })
        },
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
export const {addNewTodo, setTodoChecked, removeTodo, setCurrentTodo, editTodo} = todoActions