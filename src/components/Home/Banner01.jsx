import { Link } from "react-router-dom";
import topHero from "../../assets/images/tag_hero.svg"
import sideImage from "../../assets/images/NicePng_doctor-png_336282 1.svg";
import style from "../../style/navbar.module.css"

export default function Banner01() {
    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
            <div className="flex flex-col md:flex-row gap-5 items-center justify-center mt-10 lg:mt-0">
                <div className="downSlider">
                    <img className="w-full h-full" src={topHero} alt="" srcSet="" />
                    <Link className={`${style.appointmentBtn} text-sm sm:text-base px-7 py-3 md:py-4 md:px-10`} to="/appointment">Appointment now</Link>
                </div>
                <div>
                    <img className="rightSlider w-full h-full" src={sideImage} alt="" srcSet="" />
                </div>
            </div>
        </div>
    )
}
