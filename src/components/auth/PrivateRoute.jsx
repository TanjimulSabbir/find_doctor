import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUserLogInfo } from '../../Redux/Features/authSlice';

export default function PrivateRoute({ children }) {
    const { userLogInfo } = useSelector(state => state.authInfo);
    const navigate = useNavigate();
    // const localUserLoginInfo = JSON.parse(localStorage.getItem("userLoginInfo"));
    // const dispatch = useDispatch();


    useEffect(() => {

        if (!userLogInfo || !userLogInfo.email) {
            navigate("/login", { replace: true });
        }
    }, [userLogInfo, navigate]);

    return userLogInfo && userLogInfo.email ? children : null;
}
