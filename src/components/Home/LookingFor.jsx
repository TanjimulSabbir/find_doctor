import card_service01 from "../../assets/images/Banner02/card_service01.svg";
import card_service02 from "../../assets/images/Banner02/card_service02.svg";
import card_service03 from "../../assets/images/Banner02/card_service03.svg";
import card_service04 from "../../assets/images/Banner02/card_service04.svg";
import card_service05 from "../../assets/images/Banner02/card_service05.svg";

export default function LookingFor() {
    const cardServiceImages = [card_service01, card_service02, card_service03, card_service04, card_service05]
    return (
        <div className="mt-5">
            <h1 className="text-center mt-14 font-bold">You may be Looking for</h1>
            <div className="grid items-center justify-center mt-7 gap-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
                {cardServiceImages.map((image, index) => (
                    <img className="transition transform duration-300 hover:scale-110 hover:border-gray-300 cursor-pointer" key={index} src={image} alt={index} srcSet="" />
                ))}
            </div>
        </div>
    )
}
