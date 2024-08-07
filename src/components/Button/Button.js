import React from 'react';
import { Link } from 'react-router-dom';

const TYPE = {
    primary: ' text-white bg-gradient-to-tr from-[--btn-primary-bg-from] to-[--btn-primary-bg-to] hover:from-[--btn-primary-hover-bg-from] hover:to-[--btn-primary-hover-bg-to] dark:from-[--btn-primary-bg-dark-from] dark:to-[--btn-primary-bg-dark-to] dark:hover:from-[--btn-primary-hover-bg-dark-from] dark:hover:to-[--btn-primary-hover-bg-dark-to] active:translate-y-[4px] active:translate-x-[-2px] active:shadow-none shadow-[-2px_3px_4px_1px_rgba(0,0,0,0.2)] dark:shadow-[-2px_3px_4px_1px_rgba(255,255,255,0.2)] dark:active:shadow-none',
    outline: ' text-[--primary-color] bg-pink-100 dark:bg-[#bfdbfe] border-[1px] border-pink-500 dark:border-[--btn-primary-bg-dark-to] dark:text-[--btn-primary-bg-dark-to] hover:bg-gradient-to-tr hover:from-[--btn-primary-bg-from] hover:to-[--btn-primary-bg-to] hover:text-white hover:dark:text-white transition-all duration-300 ease-linear dark:hover:from-[--btn-primary-bg-dark-from] dark:hover:to-[--btn-primary-bg-dark-to]',
    text: ' hover:underline',
}

const SIZE = {
    xs: ' py-[2px] px-3 text-sm min-w-[66px]',
    sm: ' py-[4px] px-4 text-sm min-w-[88px]',
    md: ' py-[6px] px-4 text-base min-w-[100px]',
    lg: ' py-[11px] px-4 text-xl min-w-[124px]',
    xl: ' py-[14px] px-4 text-2xl min-w-[140px]'
}

function Button({
    to,
    href,
    onClick,
    leftIcon,
    rightIcon,
    disabled = false,
    children, size = 'md',
    text = false,
    primary = false,
    outline = false,
    className,
    ...passProps }) {

    let Comp = 'button';
    let buttonClassName = `inline-flex items-center justify-center font-bold rounded transition-all ${className || ''} ${disabled ? 'pointer-events-none select-none opacity-50' : 'cursor-pointer'}`;

    if (primary) {
        buttonClassName += TYPE.primary;
    }
    else if (outline) {
        buttonClassName += TYPE.outline;
    }
    else if (text) {
        buttonClassName += TYPE.text;
    }

    if (size) {
        switch (size) {
            case 'xs':
                buttonClassName += SIZE.xs;
                break;
            case 'sm':
                buttonClassName += SIZE.sm;
                break;
            case 'md':
                buttonClassName += SIZE.md;
                break;
            case 'lg':
                buttonClassName += SIZE.lg;
                break;
            case 'xl':
                buttonClassName += SIZE.xl;
                break;
            default:
                break;
        }
    }

    const props = {
        onClick,
        ...passProps,
    };

    if (disabled) {
        delete props.onClick;
    }

    if (to) {
        props.to = to;
        Comp = Link;
    }
    else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <Comp className={buttonClassName} {...props}>
            {leftIcon && <span>{leftIcon}</span>}
            <span className='mx-2'>{children}</span>
            {rightIcon && <span>{rightIcon}</span>}
        </Comp>
    );
}

export default Button;