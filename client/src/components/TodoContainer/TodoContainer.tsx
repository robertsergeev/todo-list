import {FC} from 'react';
import TodoItem from "../TodoItem/TodoItem.tsx";
import {useAppSelector} from "../../hooks/redux.ts";
import "./TodoContainer.css"
import {useTodos} from "../../hooks/useTodos.ts";
import {TransitionGroup, CSSTransition} from "react-transition-group"

const TodoContainer: FC = () => {
    const {todos, error, isLoading} = useAppSelector(state => state.todo)
    const {query, sort} = useAppSelector(state => state.filter)
    const searchedTodos = useTodos(todos, sort, query)

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

            <TransitionGroup>
                {
                    searchedTodos.map(todo =>
                    <CSSTransition key={todo.id} timeout={500} classNames='todo-item'>
                        <TodoItem todo={todo}/>
                    </CSSTransition>
                    )
                }
            </TransitionGroup>


        </div>
    );
};

export default TodoContainer;