import { useState } from 'react';
import InputField from '../../components/InputField/InputField';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading/Loading';
import { getToken } from '../../apiServices/authService';
import { useNavigate } from 'react-router-dom';
import { actions, useGlobalContext } from '../../context';

const LoginPage = () => {
    const [, dispatch] = useGlobalContext();
    const [isLoadingSend, setIsLoadingSend] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmit, setSubmit] = useState(false);

    const navigate = useNavigate();

    const validate = (value) => {
        if (!value) return 'Đây là ô bắt buộc';
        if (value.trim().length < 6) return 'Thông tin phải có ít nhất 6 ký tự';
        return '';
    };

    const handleLogin = (token, user) => {
        localStorage.setItem('token', token);
        dispatch(actions.setCurrentUser(user));
        navigate('/admin/service-management');
        toast.success('Chào mừng ' + user.fullName);
    }

    const handleSubmit = async () => {
        setSubmit(true);
        let checkFullName = validate(username) === '';
        let checkMail = validate(password) === '';
        if (checkFullName && checkMail) {
            setIsLoadingSend(true);
            const res = await getToken(username, password);
            if (res.statusCode > 300 && !res.data.token && !res.data.user) {
                toast.error(res.message);
            }
            else {
                handleLogin(res.data.token, res.data.user);
            }
            setIsLoadingSend(false);
            setUsername('');
            setPassword('');
            setSubmit(false);
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };

    return (
        <div className="flex items-center justify-center w-full h-screen bg-[--primary-bg-color-2] px-4">
            <div className="w-[500px] shadow-lg rounded-lg bg-white p-8">
                <div className="text-2xl font-semibold text-[--primary-color] text-center mb-5"> Đăng nhập</div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold">Tên tài khoản</div>
                    <InputField
                        isSubmit={isSubmit}
                        hasValue={!!username}
                        value={username}
                        onChange={setUsername}
                        placeholder="Nhập tên tài khoản..."
                        validate={validate}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <div className="font-semibold">Mật khẩu</div>
                    <InputField
                        isSubmit={isSubmit}
                        hasValue={!!password}
                        value={password}
                        onChange={setPassword}
                        placeholder="Nhập mật khẩu..."
                        validate={validate}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <div className="flex items-center justify-center mt-5">
                    <button
                        disabled={isLoadingSend}
                        onClick={handleSubmit}
                        className="justify-center items-center px-12 font-semibold hover:opacity-90 cursor-pointer py-1 rounded-full bg-[--primary-color] text-white text-center inline-flex"
                    >
                        {isLoadingSend ? <Loading /> : 'Đăng nhập'}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
