import {FC} from 'react';
import {ITodo} from "../../types/todo.ts";
import "./TodoItem.css"

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <div className="todo">
            <div>
                {todo.id}. {todo.title}
            </div>
            <div>
                <button>Delete</button>
            </div>
        </div>
    );
};

export default TodoItem;