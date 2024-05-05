import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDoctorLogInfo, setUserLogInfo } from '../../Redux/Features/authSlice';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const DoctorLogin = () => {
    const [doctor, setDoctorName] = useState({});
    const [password, setPassword] = useState('');
    const { doctors } = useSelector(state => state.filteredDoctor);
    const { userLogInfo } = useSelector(state => state.authInfo);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (userLogInfo.email) {
            dispatch(setUserLogInfo({}))
            localStorage.removeItem("userLoginInfo")
            toast.success("User Logout!")
        }
    }, [])

    const handleLogin = (event) => {
        event.preventDefault();
        dispatch(setDoctorLogInfo(JSON.parse(doctor)));
        localStorage.setItem("docLoginInfo", doctor);
        toast.success("Doctor Login Successful!")
        navigate("/docBoard")
    }

    return (
        <div className="downSliderFast flex justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-200">
            <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4 w-80" onSubmit={handleLogin}>
                <h2 className="text-center text-2xl font-bold mb-4 text-gray-800">Doctor Login</h2>
                <div className=" mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="doctorName">
                        <span className="text-gray-900">Doctor Name</span>
                    </label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="doctorName"
                        value={doctor}
                        onChange={(e) => setDoctorName(e.target.value)}
                    >
                        <option value="">Select Doctor</option>
                        {doctors.map((doctor, index) => (
                            <option key={index} value={JSON.stringify(doctor)}>{doctor.name}</option>
                        ))}
                    </select>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        <span className="text-gray-900">Password</span>
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="flex items-center justify-center">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                    >
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DoctorLogin;
