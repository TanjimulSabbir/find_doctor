import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { userLogInfo } = useSelector(state => state.authInfo);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userLogInfo || !userLogInfo.email) {
            navigate("/login", { replace: true });
        }
    }, [userLogInfo, navigate]);

    return userLogInfo && userLogInfo.email ? children : null;
}
