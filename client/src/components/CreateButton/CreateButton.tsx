import {FC} from 'react';
import "./CreateButton.css"

interface CreateButtonProps {
    setModal: (arg: boolean) => void,
}

const CreateButton: FC<CreateButtonProps> = ({setModal}) => {
    const handleOnClick = () => {
        setModal(true)
    }

    return (
        <button onClick={handleOnClick} className="create-btn">
        </button>
    );
};

export default CreateButton;