import {FC, useState} from 'react';
import {ITodo} from "../../types/todo.ts";
import "./TodoItem.css"

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const [checked, setChecked] = useState<boolean>(todo.completed)

    const handleOnChange = () => {
        setChecked(value => !value)
    }

    return (
        <div className="todo">
            <div>
                <div className="todo__checkbox">
                    <input onChange={handleOnChange} checked={checked} type="checkbox" name="" id=""/>
                </div>
                <div onClick={handleOnChange} className={"todo__title".concat(checked ? " checked" : "")}>
                    {todo.title}
                </div>
            </div>
            <div className="todo__btns">
                {/*<button>Date</button>*/}
                {/*<button>Edit</button>*/}
                {/*<button>Delete</button>*/}
            </div>
        </div>
    );
};

export default TodoItem;