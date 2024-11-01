import {FC} from 'react';
import "./EditIcon.css"

interface EditIconProps {
    onClick: () => void
}

const EditIcon: FC<EditIconProps> = ({onClick}) => {
    return (
        <svg onClick={onClick} className='edit-icon' width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M7.67272 3.99106L1 10.6637V14H4.33636L11.0091 7.32736M7.67272 3.99106L10.0654 1.59837L10.0669 1.59695C10.3962 1.26759 10.5612 1.10261 10.7514 1.04082C10.9189 0.986392 11.0993 0.986392 11.2669 1.04082C11.4569 1.10257 11.6217 1.26735 11.9506 1.59625L13.4018 3.04738C13.7321 3.37769 13.8973 3.54292 13.9592 3.73337C14.0136 3.90088 14.0136 4.08133 13.9592 4.24885C13.8974 4.43916 13.7324 4.60414 13.4025 4.93398L13.4018 4.93468L11.0091 7.32736M7.67272 3.99106L11.0091 7.32736"
                stroke="#CDCDCD" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    );
};

export default EditIcon;