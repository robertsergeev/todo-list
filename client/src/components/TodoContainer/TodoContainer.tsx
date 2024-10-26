import {FC} from 'react';
import TodoItem from "../TodoItem/TodoItem.tsx";
import {useAppSelector} from "../../hooks/redux.ts";
import "./TodoContainer.css"

const TodoContainer: FC = () => {
    const {todos, error, isLoading} = useAppSelector(state => state.todo)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    if (error) {
        return <h1>Error!</h1>
    }

    return (
        <div className='todo-container'>
            {
                todos.map(todo =>
                    <TodoItem key={todo.id} todo={todo}/>
                )
            }
        </div>
    );
};

export default TodoContainer;