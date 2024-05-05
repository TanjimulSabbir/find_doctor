import { useDispatch } from 'react-redux';
import './App.css'
import Home from './components/Home/Home';
import { setDoctorLogInfo } from './Redux/Features/authSlice';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.removeItem("docLoginInfo");
    dispatch(setDoctorLogInfo({}))
  }, [])


  return <Home />
}

export default App;
