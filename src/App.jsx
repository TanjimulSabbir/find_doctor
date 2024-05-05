import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import Home from './components/Home/Home';
import { setDoctorLogInfo, setUserLogInfo } from './Redux/Features/authSlice';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setAppointmentInfo } from './Redux/Features/filterSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("docLoginInfo");
    dispatch(setDoctorLogInfo({}))
  }, [])


  return <Home />
}

export default App;
