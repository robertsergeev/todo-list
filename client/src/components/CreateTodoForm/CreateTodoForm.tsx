import React, {FC, useState} from "react";
import "./CreateTodoForm.css"
import Input from "../UI/Input/Input.tsx";
import {ITodo} from "../../types/todo.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import {addNewTodo} from "../../store/reducers/todoReducer.ts";
import {changeModalVisibility} from "../../store/reducers/modalReducer.ts";

const CreateTodoForm: FC = () => {
    const [newTodo, setNewTodo] = useState<ITodo>({title: '', id: 0, completed: false})
    const dispatch = useAppDispatch()

    const setNewTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({...newTodo, title: e.target.value})
    }

    const closeForm = (e: React.MouseEvent) => {
        e.preventDefault()

        setNewTodo({...newTodo, title: ''})
        dispatch(changeModalVisibility(false))
    }

    const handleOnNewTodoCreation = (e: React.MouseEvent) => {
        e.preventDefault()

        if(newTodo.title) {
            dispatch(addNewTodo(newTodo))
        }
        setNewTodo({...newTodo, title: ''})
        dispatch(changeModalVisibility(false))
    }

    return (
        <form className='create-todo-form' name="Create Todo Form">
            <h2>new note</h2>
            {/*@ts-ignore*/}
            <Input value={newTodo.title} onChange={setNewTodoTitle} placeholder={"Input your note..."}/>
            <div className='create-todo__btns'>
                <button onClick={closeForm}>Cancel</button>
                <button onClick={handleOnNewTodoCreation}>Apply</button>
            </div>
        </form>
    );
};

export default CreateTodoForm;