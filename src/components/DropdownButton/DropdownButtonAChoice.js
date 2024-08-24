import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const DropdownButtonAChoice = ({
    placeHolder = 'Chọn dịch vụ',
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
        setSelected(option);
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

    useEffect(() => {
        if (isSubmit) {
            const validationError = validate(selected ? [selected] : []);
            setError(validationError);
        }
    }, [isSubmit, selected, validate]);

    return (
        <div className="relative inline-block text-base text-left" ref={dropdownRef}>
            <button
                type="button"
                onClick={toggleDropdown}
                className={`relative flex gap-2 items-center w-full flex-wrap px-4 py-1.5 text-black border-2 border-gray-300 rounded-lg hover:bg-gray-100 focus:outline-none ${buttonClassName} ${error ? 'bg-red-50' : 'bg-white'}`}
            >
                {selected ? (
                    selected.title
                ) : placeHolder}

                <FontAwesomeIcon icon={isOpen ? faChevronUp : faChevronDown} className="absolute text-xs -translate-y-1/2 top-1/2 right-3" />
                {isOpen && options.length > 0 && (
                    <div className={`absolute transition-all duration-100 ease-in-out top-full right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ${dropdownClassName}`}
                    >
                        <div className="py-1">
                            {options.map((option) => (
                                <span
                                    key={option.id}
                                    onClick={() => handleOptionClick(option)}
                                    className="relative block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                                >
                                    {option.title}
                                    {option === selected && (
                                        <span className="absolute right-3">
                                            <FontAwesomeIcon className='text-base text-green-500' icon={faCheck} />
                                        </span>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
            </button>
        </div>
    );
};

export default DropdownButtonAChoice;
