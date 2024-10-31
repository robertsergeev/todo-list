import React, {FC} from 'react';
import "./TodoSearchForm.css"
import Input from "../UI/Input/Input.tsx";
import {useAppDispatch, useAppSelector} from "../../hooks/redux.ts";
import {setQuery, setSort} from "../../store/reducers/filterReducer.ts";
import Select from "../UI/Select/Select.tsx";

const TodoSearchForm: FC = () => {
    const dispatch = useAppDispatch()
    const {query, sort} = useAppSelector(state => state.filter)

    const handleOnChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setQuery(e.target.value))
    }

    const handleOnChangeSort = (selectedSort: string) => {
        dispatch(setSort(selectedSort))
    }

    return (
        <div className="todo-form">
            <div className="container">
                <form className="todo-form__form" name='Search Form'>
                    {/*TODO: type input!!!*/}
                    {/*@ts-ignore */}
                    <Input value={query} onChange={handleOnChangeQuery} placeholder={"Search note..."} type="text"/>
                    <Select
                        value={sort}
                        defaultValue={"Sort By"}
                        onChange={handleOnChangeSort}
                        options={[
                            {value: 'all', name: 'All'},
                            {value: 'completed', name: 'Completed'},
                            {value: 'incomplete', name: 'Incomplete'},
                        ]}
                    />
                </form>
            </div>
        </div>
    );
};

export default TodoSearchForm;