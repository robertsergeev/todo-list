import {FC, forwardRef, useRef} from 'react';
import classes from "./Input.module.css"

interface InputProps {
    props?: any,
}

const Input: FC<InputProps> = forwardRef(({...props}, ref) => {
    return (
        <input className={classes.input} ref={ref} {...props}/>
    );
});

export default Input;