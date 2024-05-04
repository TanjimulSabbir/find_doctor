import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Home from './components/Home/Home';
import { setUserLogInfo } from './Redux/Features/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setAppointmentInfo } from './Redux/Features/filterSlice';

function App() {
  const { userLogInfo, appointmentInfo } = useSelector(state => state.authInfo);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const localLoginInfo = JSON.parse(localStorage.getItem("userLoginInfo"));
  const localPreviousData = JSON.parse(localStorage.getItem("appointmentInfo"))

  useEffect(() => {
    if (!localLoginInfo) {
      return navigate("/login")
    }
    if (localLoginInfo.email && !userLogInfo.email) {
      dispatch(setUserLogInfo(localLoginInfo))
    }
    if (localPreviousData) {
      dispatch(setAppointmentInfo(localPreviousData))
    }
  })

  return <Home />
}

export default App;
