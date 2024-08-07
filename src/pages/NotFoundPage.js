import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="text-center">
                <h1 className="font-bold text-gray-800 text-9xl">404</h1>
                <p className="mt-4 text-2xl text-gray-600">Oops! The page you are looking for does not exist.</p>
                <Link to="/" className="inline-block px-8 py-3 mt-6 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700">
                    Go back to Home
                </Link>
            </div>
        </div>
    );
}

export default NotFoundPage;
