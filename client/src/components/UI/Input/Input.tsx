import {FC} from 'react';
import classes from "./Input.module.css"

interface InputProps {
    props?: any,
}

const Input: FC<InputProps> = (props) => {
    return (
        <input className={classes.input} {...props}>
        </input>
    );
};

export default Input;