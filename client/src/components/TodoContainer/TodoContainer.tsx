import {FC} from 'react';
import TodoItem from "../TodoItem/TodoItem.tsx";
import {useAppSelector} from "../../hooks/redux.ts";
import "./TodoContainer.css"

const TodoContainer: FC = () => {
    const {todos, error, isLoading} = useAppSelector(state => state.todo)

    return (
        <div className='todo-container'>
            {
                isLoading &&
                <div className="container"><h1>Loading...</h1></div>
            }
            {
                error &&
                <div className="container"><h1>Error!</h1></div>
            }
            {
                todos.map(todo =>
                    <TodoItem key={todo.id} todo={todo}/>
                )
            }
        </div>
    );
};

export default TodoContainer;