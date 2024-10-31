import React, {FC} from 'react';
import "./Select.css"

interface SelectProps{
    options: Array<{value: string, name: string}>;
    defaultValue: string;
    onChange: (value: string) => void;
    value: string;
}

const Select: FC<SelectProps> = ({options, defaultValue, onChange, value}) => {

    const handleOnChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value)
    }

    return (
        <select
            value={value}
            onChange={handleOnChange}
            className='select'
        >
            <option disabled value=''>{defaultValue}</option>
            {
                options.map(option =>
                    <option key={option.value} value={option.value}>{option.name}</option>
                )
            }
        </select>
    );
};

export default Select;