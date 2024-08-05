import React, { useEffect, useRef, useCallback } from 'react';
import Header from './Header';
// import Footer from './Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { useGlobalContext } from '../../context';

const HomeLayout = ({ children }) => {
    const [state] = useGlobalContext();
    const { theme } = state;
    const btnGoToTopRef = useRef();

    const calcScrollValue = useCallback(() => {
        const position = document.documentElement.scrollTop;
        const calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollValue = Math.round((position * 100) / calcHeight);

        if (btnGoToTopRef.current) {
            btnGoToTopRef.current.style.display = position > 100 ? 'flex' : 'none';
            btnGoToTopRef.current.style.background = `conic-gradient(${theme === 'light' ? '#F07167' : '#031544'} ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
        }
    }, [theme]);

    useEffect(() => {
        window.addEventListener('scroll', calcScrollValue);

        return () => {
            window.removeEventListener('scroll', calcScrollValue);
        };
    }, [calcScrollValue]);

    const handleGoToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <Header />
            <div>{children}</div>
            {/* <Footer /> */}
            <div
                ref={btnGoToTopRef}
                onClick={handleGoToTop}
                className="fixed z-50 items-center justify-center hidden rounded-full cursor-pointer ring-white ring-1 w-14 h-14 bottom-20 right-6 md:right-12"
            >
                <div
                    className="flex items-center justify-center w-[calc(100%-8px)] rounded-full cursor-pointer h-[calc(100%-8px)] bg-white"
                >
                    <FontAwesomeIcon className='text-xl text-[#F07167] dark:text-[--btn-primary-bg-dark-from]' icon={faArrowUp} />
                </div>
            </div>
        </>
    );
};

export default HomeLayout;
