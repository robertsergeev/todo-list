import {FC} from 'react';
import "./CreateButton.css"
import {useAppDispatch} from "../../hooks/redux.ts";
import {changeModalVisibility, modalNames} from "../../store/reducers/modalReducer.ts";


const CreateButton: FC = () => {
    const dispatch = useAppDispatch()

    const handleOnClick = () => {
        dispatch(changeModalVisibility({modalName: modalNames.createTodoModal, value: true}))

    }

    return (
        <button onClick={handleOnClick} className="create-btn">
        </button>
    );
};

export default CreateButton;