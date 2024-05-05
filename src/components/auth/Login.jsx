import { useEffect, useState } from 'react';
import { setDoctorLogInfo, setUserLogInfo } from '../../Redux/Features/authSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const { doctorLogInfo } = useSelector(state => state.authInfo)
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (doctorLogInfo.id) {
            dispatch(setDoctorLogInfo({}));
            localStorage.removeItem("docLoginInfo");
        }
    }, [])

    const handleData = (e) => {
        e.preventDefault();
        localStorage.setItem("userLoginInfo", JSON.stringify(formData))
        dispatch(setUserLogInfo({ ...formData }))
        navigate("/appointment")
        toast.success("Login successful")
    };

    return (
        <div className="downSliderFast flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-green-200">
            <form className="bg-white rounded-lg px-8 pt-6 pb-8 mb-4 w-96" onSubmit={handleData}>
                <h2 className="text-center text-3xl font-bold mb-8 text-gray-800">Login</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Login
                    </button>
                </div>
            </form>
        </div>
    );
}

export default LoginForm;
