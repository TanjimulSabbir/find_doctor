import { Link } from "react-router-dom";
import topHero from "../../assets/images/tag_hero.svg"
import sideImage from "../../assets/images/NicePng_doctor-png_336282 1.svg";
import style from "../style/navbar.module.css"

export default function Banner01() {
    return (
        <div className="container flex items-center mx-auto z-10">
            <div>
                <img className="w-full h-full" src={topHero} alt="" srcSet="" />
                <Link className={style.appointmentBtn} to="/appointment">Appointment now</Link>
            </div>
            <div>
                <img className="w-full h-full" src={sideImage} alt="" srcSet="" />
            </div>
        </div>
    )
}
