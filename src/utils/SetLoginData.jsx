import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { setDoctorLogInfo, setUserLogInfo } from '../Redux/Features/authSlice';

export default function SetLoginData({ children }) {
    const { userLogInfo, doctorLogInfo } = useSelector(state => state.authInfo);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const localUserLoginInfo = JSON.parse(localStorage.getItem("userLoginInfo"));
    const localDoctorInfo = JSON.parse(localStorage.getItem("docLoginInfo"));


    if (!userLogInfo?.email && localUserLoginInfo?.email) {
        return dispatch(setUserLogInfo(localUserLoginInfo))
    }
    if (!doctorLogInfo?.id && localDoctorInfo?.id) {
        return dispatch(setDoctorLogInfo(localDoctorInfo))
    }

    return children;
}
