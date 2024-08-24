import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { jwtDecode } from "jwt-decode";
import { toast } from 'react-toastify';
import { setCurrentUser } from '../../context/actions';
import Loading from '../Loading/Loading';

const PrivateRoute = ({ element }) => {
    return element;
    const [, dispatch] = useGlobalContext();
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const checkAuth = async () => {
            if (!token) {
                setIsAuthenticated(false);
                return;
            }

            try {
                const decodedToken = jwtDecode(token);
                if (decodedToken.exp * 1000 > Date.now()) {
                    dispatch(setCurrentUser(decodedToken));
                    setIsAuthenticated(true);
                } else {
                    localStorage.removeItem('token');
                    toast.error('Vui lòng đăng nhập lại');
                    setIsAuthenticated(false);
                }
            } catch (error) {
                toast.error('Vui lòng đăng nhập lại');
                localStorage.removeItem('token');
                setIsAuthenticated(false);
                navigate('/admin/login/');
            }
        };

        checkAuth();
    }, [token, dispatch, navigate]);

    if (isAuthenticated === null) return (
        <div className="fixed inset-0 flex items-center justify-center">
            <Loading className='text-[--primary-color-2]' />
        </div>
    );

    return isAuthenticated ? element : <Navigate to="/admin/login" />;
};

export default PrivateRoute;
