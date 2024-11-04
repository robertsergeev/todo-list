import React, {FC} from 'react';
import "./EditTodoForm.css"
import Input from "../UI/Input/Input.tsx";
import {changeModalVisibility, modalNames} from "../../store/reducers/modalReducer.ts";
import {useAppDispatch} from "../../hooks/redux.ts";

const EditTodoForm: FC = () => {
    const dispatch = useAppDispatch()

    const closeForm = (e: React.MouseEvent) => {
        e.preventDefault()
        dispatch(changeModalVisibility({modalName: modalNames.editTodoModal, value: false}))
    }

    return (
        <form className='edit-todo-form' name="Edit Todo Form">
            <h2>Edit Todo</h2>
            {/*TODO: type input!!!*/}
            {/*@ts-ignore*/}
            <Input />
            <div className='edit-todo__btns'>
                <button onClick={closeForm}>Cancel</button>
                <button >Apply</button>
            </div>
        </form>
    );
};

export default EditTodoForm;