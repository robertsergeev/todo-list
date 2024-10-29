import {FC} from 'react';
import "./TodoSearchForm.css"
import Input from "../UI/Input/Input.tsx";

const TodoSearchForm: FC = () => {
    return (
        <div className="todo-form">
            <div className="container">
                <form className="todo-form__form">
                    {/*@ts-ignore */}
                    <Input placeholder={"Search note..."} type="text"/>
                </form>
            </div>
        </div>
    );
};

export default TodoSearchForm;