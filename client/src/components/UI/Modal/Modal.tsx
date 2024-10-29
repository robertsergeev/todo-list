import React, {FC, ReactNode} from 'react';
import classes from "./Modal.module.css"

interface ModalProps {
    children: ReactNode;
    visible: boolean;
    setVisible: (arg: boolean) => void;
}

const Modal: FC<ModalProps> = ({children, visible, setVisible}) => {
    const rootClasses = [classes.modal]

    if(visible) {
        rootClasses.push(classes.active)
    }

    const closeModal = () => {
        setVisible(false)
    }

    const handleOnChildrenClick = (event: React.MouseEvent) => {
        event.stopPropagation()
    }

    return (
        <div className={rootClasses.join(' ')} onClick={closeModal}>
            <div className={classes.modal__content} onClick={handleOnChildrenClick}>
                {children}
            </div>
        </div>
    );
};

export default Modal;