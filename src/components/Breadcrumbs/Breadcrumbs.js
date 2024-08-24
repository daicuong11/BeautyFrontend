import React from 'react';
import { Link } from 'react-router-dom';
import useBreadcrumbs from '../../hooks/useBreadcumbs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Breadcrumbs = () => {
    const breadcrumbs = useBreadcrumbs();

    return (
        <div className="flex items-center text-lg">
            {
                breadcrumbs.map((breadcrumb, index) => (
                    <span key={index} className="">
                        {index < breadcrumbs.length - 1 ? (
                            <Link className='cursor-pointer hover:underline' to={breadcrumb.path}>{breadcrumb.title}</Link>
                        ) : (
                            <span>
                                {index !== 0 && <FontAwesomeIcon className='mx-2 text-gray-500' icon={faCaretRight} />}
                                <span className={`${index !== 0 && 'text-indigo-500'}`}>{breadcrumb.title}</span>
                            </span>
                        )}
                    </span>
                ))
            }
        </div>
    );
};

export default Breadcrumbs;
