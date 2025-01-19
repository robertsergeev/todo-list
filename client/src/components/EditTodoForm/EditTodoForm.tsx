import React, {FC, useState} from 'react';
import "./EditTodoForm.css"
import Input from "../UI/Input/Input.tsx";
import {changeModalVisibility, modalNames} from "../../store/reducers/modalReducer.ts";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {editTodo, setCurrentTodo} from "../../store/reducers/todoReducer.ts";
import axios from "axios";

const EditTodoForm: FC = () => {
    const dispatch = useAppDispatch()
    const {currentTodo} = useAppSelector(state => state.todo)
    const [editedTodoText, setEditedTodoText] = useState<string>("")

    const closeForm = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(setCurrentTodo(null))
        dispatch(changeModalVisibility({modalName: modalNames.editTodoModal, value: false}))
        setEditedTodoText("")
    }

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTodoText(e.target.value)
    }

    const handleTodoEdit = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(editTodo(editedTodoText))

        const token = localStorage.getItem('token')

        try {
            if(currentTodo) {
                axios.patch(`http://localhost:3000/todo/${currentTodo.id}/change_title`, {
                    title: editedTodoText
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                })
            }

        } catch (e) {
            console.log(e);
        }

        dispatch(setCurrentTodo(null))
        dispatch(changeModalVisibility({modalName: modalNames.editTodoModal, value: false}))
        setEditedTodoText("")
    }

    return (
        <form className='edit-todo-form' name="Edit Todo Form">
            <h2>Edit Todo</h2>
            {/*TODO: type input!!!*/}
            {/*@ts-ignore*/}
            <Input value={editedTodoText} onChange={handleOnChange} placeholder={currentTodo?.title}/>
            <div className='edit-todo__btns'>
                <button onClick={closeForm}>Cancel</button>
                <button onClick={handleTodoEdit}>Apply</button>
            </div>
        </form>
    );
};

export default EditTodoForm;