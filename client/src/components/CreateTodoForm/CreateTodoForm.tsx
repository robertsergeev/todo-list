import React, {FC, useState} from "react";
import "./CreateTodoForm.css"
import Input from "../UI/Input/Input.tsx";
import {ITodo} from "../../types/todo.ts";
import {useAppDispatch} from "../../hooks/redux.ts";
import {addNewTodo} from "../../store/reducers/todoReducer.ts";
import {changeModalVisibility, modalNames} from "../../store/reducers/modalReducer.ts";

const CreateTodoForm: FC = () => {
    const [newTodo, setNewTodo] = useState<ITodo>({title: '', id: Date.now(), completed: false})
    const dispatch = useAppDispatch()

    const setNewTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({...newTodo, title: e.target.value})
    }

    const closeForm = (e: React.MouseEvent) => {
        e.preventDefault()

        setNewTodo({...newTodo, title: ''})
        dispatch(changeModalVisibility({modalName: modalNames.createTodoModal, value: false}))
    }

    const handleOnNewTodoCreation = (e: React.FormEvent) => {
        console.log('submit')
        console.log(e)

        e.preventDefault()

        if(newTodo.title) {
            dispatch(addNewTodo(newTodo))
        }
        setNewTodo({...newTodo, title: '', id: Date.now()})
        dispatch(changeModalVisibility({modalName: modalNames.createTodoModal, value: false}))
    }

    return (
        <form onSubmit={handleOnNewTodoCreation} className='create-todo-form' name="Create Todo Form">
            <h2>new note</h2>
            {/*TODO: type input!!!*/}
            {/*@ts-ignore*/}
            <Input value={newTodo.title} onChange={setNewTodoTitle} placeholder={"Input your note..."}/>
            <div className='create-todo__btns'>
                <button onClick={closeForm}>Cancel</button>
                <button type='submit'>Apply</button>
            </div>
        </form>
    );
};

export default CreateTodoForm;