import {FC} from 'react';
import "./Loader.css"

const Loader: FC = () => {
    return (
        <div className='loader-container'>
            <div className="loader"></div>
        </div>
    );
};

export default Loader;