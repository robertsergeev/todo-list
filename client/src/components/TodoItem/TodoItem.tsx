import {FC, useState, memo} from 'react';
import {ITodo} from "../../types/todo.ts";
import "./TodoItem.css"
import {useAppDispatch} from "../../hooks/redux.ts";
import {removeTodo, setCurrentTodo, setTodoChecked} from "../../store/reducers/todoReducer.ts";
import EditIcon from "../UI/Icons/EditIcon/EditIcon.tsx";
import {changeModalVisibility, modalNames} from "../../store/reducers/modalReducer.ts";
import TrashIcon from "../UI/Icons/TrashIcon/TrashIcon.tsx";
import axios from "axios";

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    const [checked, setChecked] = useState<boolean>(todo.completed)
    const dispatch = useAppDispatch()

    const handleOnChange = () => {
        setChecked(value => !value)
        dispatch(setTodoChecked({todo, value: !checked}))

        const token = localStorage.getItem('token')
        try {
            axios.patch(`http://localhost:3000/todo/${todo.id}/toggle_completed`, {
                completed: !checked
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
        } catch (e) {
            console.log(e);
        }
    }

    const openEditModal = () => {
        dispatch(setCurrentTodo(todo))
        dispatch(changeModalVisibility({modalName: modalNames.editTodoModal, value: true}))
    }

    const handleDeleteTodo = () => {
        dispatch(removeTodo(todo))

        const token = localStorage.getItem('token')
        try {
            axios.delete(`http://localhost:3000/todo/${todo.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            })
                .then(res => console.log(res))
        } catch (e) {
            console.log(e);
        }
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
                <TrashIcon onClick={handleDeleteTodo}/>
            </div>
        </div>
    );
};

export default memo(TodoItem);