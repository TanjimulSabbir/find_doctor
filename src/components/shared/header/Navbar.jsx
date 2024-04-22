import { Link } from "react-router-dom";
import style from "../../style/navbar.module.css"

function Navbar() {
    const handleChoice = () => {

    }
    return (
        <>
            <div className={style.topNav}></div>
            <div className={style.navbarContainter}>
                <div className="container flex items-center justify-end space-x-10">
                    <Link>Find Doctors</Link>
                    <Link>Medicines</Link>
                    <Link>Contact</Link>
                    <Link>About us</Link>
                    <Link>Facilites</Link>
                    <Link className={style.signup}>Signup</Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;