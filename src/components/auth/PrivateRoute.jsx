import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const { userLogInfo } = useSelector(state => state.authInfo);
    const navigate = useNavigate();

    if (!userLogInfo || !userLogInfo.email) {
        navigate("/login", { replace: true });
        return null; // or any other loading indicator
    }

    return children;
}
