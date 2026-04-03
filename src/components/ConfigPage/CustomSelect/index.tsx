import { useState } from 'react';
import style from "./style.module.css";

interface Props {
    options: string[],
    selectedOption: string,
    onSelect: (value: string) => void
}

const CustomSelect = ({ options, selectedOption, onSelect }: Props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const onOptionClicked = (option: string) => {
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className={style.selectContainer}>
            <div className={`${style.selectHeader} 
                ${selectedOption == "jetbrains" ? style.jetbrains : selectedOption == "roboto" ? style.roboto : style.times}`} 
                onClick={toggleDropdown}>
                {selectedOption}
                <span className={`${style.arrow} ${isOpen && style.open }`}>▼</span>
            </div>
            
            {isOpen && (
                <ul className={style.selectList}>
                {options.map((option) => (
                    <li 
                        key={option} 
                        className={style.selectItem}
                        value={option} 
                        onClick={() => onOptionClicked(option)}
                    >
                        {option}
                    </li>
                ))}
                </ul>
            )}
        </div>
    );
};

export default CustomSelect;
