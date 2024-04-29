import { RiArrowRightSLine } from 'react-icons/ri';

const CategoryFilterNavbar = ({ data }) => {
    const { showType, treatmentInfo, findDoctors, category, handleShowAllClick, handleShowFilteredClick, setCategory } = data;

    return (
        <p className="rightSlider text-black flex items-center space-x-2 mb-3">
            <span className={`cursor-pointer ${showType === "show-all" && "text-green-600 font-bold"}`}
                onClick={handleShowAllClick}>
                Show all ({treatmentInfo.doctors.length})
            </span>

            <span
                className={`flex items-center space-x-2 cursor-pointer ${showType === "show-filtered" && "text-green-600 font-bold"}`}
                onClick={handleShowFilteredClick}
            >
                <RiArrowRightSLine />
                <span> Show filtered ({findDoctors.length})</span>
            </span>

            <span
                className={`flex items-center space-x-2 cursor-pointer ${category && "text-green-600 font-bold"}`}
                onClick={() => category ? setCategory("") : setCategory("Medicine")}
            >
                <RiArrowRightSLine />
                <span>{category ? `Remove Category (${category})` : "Show Category (not selected)"}</span>
            </span>
        </p>
    );
};

export default CategoryFilterNavbar;
