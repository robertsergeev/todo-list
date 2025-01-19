import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const fetchAllTodos = createAsyncThunk(
    'todos/fetchAll',
    async (token: string, thunkAPI) => {
        try {
            const response = await axios.get('http://localhost:3000/todo/todos',{
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
            const totalTodos = Number(response.headers['x-total-count']);
            const todos = await response.data.todos;
            return {todos, totalTodos}
        } catch (err) {
            if(err instanceof Error) return thunkAPI.rejectWithValue(err.message);
            return thunkAPI.rejectWithValue('Error!');
        }
    }
)