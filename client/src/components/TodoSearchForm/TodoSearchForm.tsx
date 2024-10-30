import React, {FC} from 'react';
import "./TodoSearchForm.css"
import Input from "../UI/Input/Input.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {setQuery} from "../../store/reducers/filterReducer.ts";

const TodoSearchForm: FC = () => {
    const dispatch = useAppDispatch()
    const {query} = useAppSelector(state => state.filter)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQuery(e.target.value))
    }

    return (
        <div className="todo-form">
            <div className="container">
                <form className="todo-form__form" name='Search Form'>
                    {/*TODO: type input!!!*/}
                    {/*@ts-ignore */}
                    <Input value={query} onChange={handleOnChange} placeholder={"Search note..."} type="text"/>
                </form>
            </div>
        </div>
    );
};

export default TodoSearchForm;