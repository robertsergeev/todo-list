import {FC, useState} from 'react';
import {ITodo} from "../../types/todo.ts";
import "./TodoItem.css"
import {useAppDispatch} from "../../hooks/redux.ts";
import {setTodoChecked} from "../../store/reducers/todoReducer.ts";
import EditIcon from "../UI/Icons/EditIcon/EditIcon.tsx";
import {changeModalVisibility, modalNames} from "../../store/reducers/modalReducer.ts";
import TrashIcon from "../UI/Icons/TrashIcon/TrashIcon.tsx";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const [checked, setChecked] = useState<boolean>(todo.completed)
    const dispatch = useAppDispatch()

    const handleOnChange = () => {
        setChecked(value => !value)
        dispatch(setTodoChecked({todo, value: !checked}))
    }

    const openEditModal = () => {
        dispatch(changeModalVisibility({modalName: modalNames.editTodoModal, value: true}))
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
                <EditIcon onClick={openEditModal}/>
                <TrashIcon />
            </div>
        </div>
    );
};

export default TodoItem;