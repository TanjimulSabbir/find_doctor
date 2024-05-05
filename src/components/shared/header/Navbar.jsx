import { Link, useLocation, useNavigate } from "react-router-dom";
import style from "../../../style/navbar.module.css"
import { CgClose } from "react-icons/cg";
import { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { setDoctorLogInfo, setUserLogInfo } from "../../../Redux/Features/authSlice";
import DoctorLogin from "../../auth/DoctorLogin";
import toast from "react-hot-toast";

function Navbar() {
    const [menu, setMenu] = useState(true);
    const { userLogInfo, doctorLogInfo } = useSelector(state => state.authInfo);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    console.log(userLogInfo, "from navbar")

    const handleLogin = () => {
        if (!userLogInfo.email) {
            dispatch(setUserLogInfo({}))
            localStorage.removeItem("userLoginInfo")
            navigate("/login");
        } else {
            dispatch(setUserLogInfo({}))
            localStorage.removeItem("userLoginInfo")
            toast.error("logout")
            navigate("/login");
        }
    }

    const handleDocLogin = () => {
        if (!doctorLogInfo?.id) {
            dispatch(setDoctorLogInfo({}))
            localStorage.removeItem("docLoginInfo")
            navigate("/docLogin");
        } else {
            dispatch(setDoctorLogInfo({}))
            localStorage.removeItem("docLoginInfo")
            toast.error("logout")
            navigate("/docLogin");
        }
    }

    return (
        <>
            <div className={style.topNav}></div>
            <button onClick={() => setMenu(!menu)} className="absolute top-1 right-2 lg:hidden">
                <BiMenu className="text-3xl text-white transition-all duration-700 " />
            </button>
            <div className={`${style.navbarContainter} hidden lg:block`}>
                <div className="container flex items-center justify-end space-x-10">
                    <Link to="/">Find Doctors</Link>
                    <Link to="/">Medicines</Link>
                    <Link to="/">Contact</Link>
                    <Link to="/">About us</Link>
                    <Link to="/">Facilities</Link>

                    {
                        !userLogInfo.email && !doctorLogInfo.id && <button className={style.signup} onClick={handleLogin}>
                            Login
                        </button>
                    }

                    {userLogInfo?.email ? <button className={style.signup} onClick={handleLogin}>
                        {userLogInfo?.email ? "Logout" : "Login"}
                    </button> : <button className={style.signup} onClick={handleDocLogin}>
                        {doctorLogInfo?.id ? "Doc Logout" : "Doc Login"}
                    </button>}

                </div>
            </div>
            <div className={`relative lg:hidden w-full max-w-[60%] transform transition-all duration-700 z-50 ${menu ? "block opacity-100" : "opacity-0"}`}>
                <div className="absolute top-0 left-0 bg-[#000000] h-screen w-full  text-white pb-10 px-5">
                    <div className="flex flex-col justify-center gap-5 mt-7">
                        <Link>Find Doctors</Link>
                        <Link>Medicines</Link>
                        <Link>Contact</Link>
                        <Link>About us</Link>
                        <Link>Facilities</Link>
                        {/* {userLogInfo.email ? (
                            <button className={style.signup} onClick={handleLogin}>
                                {doctorLogInfo?.id ? "Doc Logout" : "Logout"}
                            </button>
                        ) : (
                            <button className={style.signup} onClick={handleLogin}>
                                Login
                            </button>
                        )} */}

                    </div>
                </div>
                {menu && <button onClick={() => setMenu(!menu)} className="absolute top-3 right-3 text-xl text-white"><CgClose /></button>}
            </div>
        </>
    )
}

export default Navbar;
