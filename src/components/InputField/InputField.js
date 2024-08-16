import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';

const InputField = ({
    value,
    onChange,
    type = 'text',
    placeholder = '',
    className = '',
    multiline = false,
    rows = 3,
    validate = () => '',
    isSubmit = false,
    hasValue = true,
    onKeyDown = () => '',
}) => {
    const [error, setError] = useState('');

    const handleInputChange = (event) => {
        const newValue = event.target.value;
        const validationError = validate(newValue);
        setError(validationError);
        onChange(newValue);
    };

    const handleBlur = () => {
        const validationError = validate(value);
        setError(validationError);
    };



    useEffect(() => {
        if (isSubmit) {
            const validationError = validate(value);
            setError(validationError);
        } else if (!hasValue) {
            setError('');
        }
    }, [isSubmit, value, validate, hasValue]);

    return (
        <div className="mb-3">
            {multiline ? (
                <textarea
                    value={value}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    className={`w-full outline-none text-sm text-black hover:border-blue-500 focus:border-blue-500 border-2 px-3 py-[6px] border-gray-300 ${error ? 'border-red-500 hover:bg-white focus:bg-white hover:border-red-500 bg-red-50 border-2 focus:border-red-500' : 'border-gray-300 hover:border-blue-500 bg-white focus:border-blue-500'} rounded-lg`}
                    rows={rows}
                    onKeyDown={event => onKeyDown(event)}
                />
            ) : (
                <div className="relative">
                    <input
                        type={type}
                        value={value}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        placeholder={placeholder}
                        onKeyDown={event => onKeyDown(event)}
                        className={`w-full outline-none text-sm text-black hover:border-blue-500 focus:border-blue-500 border-2 px-3 py-[6px] border-gray-300 ${error ? 'border-red-500 hover:bg-white focus:bg-white hover:border-red-500 bg-red-50 border-2 focus:border-red-500' : 'border-gray-300 hover:border-blue-500 bg-white focus:border-blue-500'} rounded-lg`}
                    />
                    {error && (
                        <span className="absolute text-red-500 -translate-y-1/2 right-3 top-1/2">
                            <FontAwesomeIcon icon={faTriangleExclamation} />
                        </span>
                    )}
                </div>
            )}

            {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
        </div>
    );
};

export default InputField;
