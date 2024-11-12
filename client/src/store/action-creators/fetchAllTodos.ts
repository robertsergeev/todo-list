import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

interface fetchAllTodosArgs {
    page: number,
    limit: number,
}

export const fetchAllTodos = createAsyncThunk(
    'todos/fetchAll',
    async ({page, limit}: fetchAllTodosArgs, thunkAPI) => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/todos',{
                params: {
                    _page: page,
                    _limit: limit
                }
            })
            const totalTodos = Number(response.headers['x-total-count']);
            const todos = await response.data;
            return {todos, totalTodos}
        } catch (err) {
            if(err instanceof Error) return thunkAPI.rejectWithValue(err.message);
            return thunkAPI.rejectWithValue('Error!');
        }
    }
)