import {FC} from 'react';
import "./CreateButton.css"
import {useAppDispatch} from "../../hooks/redux.ts";
import {changeModalVisibility} from "../../store/reducers/modalReducer.ts";


const CreateButton: FC = () => {
    const dispatch = useAppDispatch()

    const handleOnClick = () => {
        dispatch(changeModalVisibility(true))
    }

    return (
        <button onClick={handleOnClick} className="create-btn">
        </button>
    );
};

export default CreateButton;