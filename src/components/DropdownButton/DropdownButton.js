import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons';

const DropdownButton = ({
    options = [],
    selected,
    setSelected,
    buttonClassName = '',
    dropdownClassName = '',
    isSubmit = false,
    validate = () => ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');
    const dropdownRef = useRef(null);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        setSelected(pre => [...pre, option]);
        setIsOpen(false);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const filteredOptions = options.filter(option => !selected.some(selectedOption => selectedOption.id === option.id));

    const handleCancelSelected = (event, option) => {
        event.stopPropagation();
        setSelected((prev) => prev.filter(selectedOption => selectedOption.id !== option.id));
    };

    useEffect(() => {
        if (isSubmit) {
            const validationError = validate(selected);
            setError(validationError);
        }
    }, [isSubmit, selected, validate]);

    return (
        <div className="relative inline-block mb-3 text-base text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={toggleDropdown}
                className={`relative flex gap-2 items-center w-full flex-wrap px-4 py-1 text-black border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none ${buttonClassName} ${error ? 'bg-red-50' : 'bg-white'}`}
            >
                {selected.length > 0 ? selected.map((select, indexSelected) => (
                    <div key={indexSelected} className="flex items-center gap-1">
                        <div className="text-white bg-[--primary-color] dark:bg-[--primary-dark-color] py-[2px] rounded-md px-3">{select.title}</div>
                        <span onClick={(event) => handleCancelSelected(event, select)} className="h-full px-2 text-xl text-gray-500 bg-gray-200 rounded-md cursor-pointer hover:bg-gray-300 hover:text-gray-900">
                            <FontAwesomeIcon icon={faXmark} />
                        </span>
                    </div>
                ))
                    :
                    'Chọn dịch vụ'
                }

                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="absolute text-xs -translate-y-1/2 top-1/2 right-3" />
            </button>
            {isOpen && filteredOptions.length > 0 && (
                <div className={`absolute transition-all duration-100 ease-in-out right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${dropdownClassName}`}
                >
                    <div className="py-1">
                        {filteredOptions.map((option) => (
                            <button
                                key={option.id}
                                onClick={() => handleOptionClick(option)}
                                className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                            >
                                {option.title}
                            </button>
                        ))}
                    </div>
                </div>
            )}
            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default DropdownButton;
