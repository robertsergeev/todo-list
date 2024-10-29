import {FC} from "react";
import "./CreateTodoForm.css"
import Input from "../UI/Input/Input.tsx";

const CreateTodoForm: FC = () => {
    return (
        <div className='create-todo-form'>
            <h2>new note</h2>
            {/*@ts-ignore*/}
            <Input placeholder={"Input your note..."}/>
            <div className='create-todo__btns'>
                <button>Cancel</button>
                <button>Apply</button>
            </div>
        </div>
    );
};

export default CreateTodoForm;