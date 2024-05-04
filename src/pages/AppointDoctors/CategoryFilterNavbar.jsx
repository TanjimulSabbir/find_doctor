import { RiArrowRightSLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { setInnerCategory } from '../../Redux/Features/filterSlice';

const CategoryFilterNavbar = ({ handleShowAllClick, handleShowFilteredClick }) => {
    const { doctors, showFilteredData, searchedText } = useSelector(state => state.filteredDoctor);
    const { innerCategory, showType } = searchedText;
    const dispatch = useDispatch();

    return (
        <p className="rightSlider text-black flex items-center space-x-2 mb-3">
            <span className={`cursor-pointer ${showType === "all" && "text-green-600 font-bold"}`}
                onClick={handleShowAllClick}>
                Show all ({doctors.length})
            </span>

            <span
                className={`flex items-center space-x-2 cursor-pointer ${showType === "filtered" && "text-green-600 font-bold"}`}
                onClick={handleShowFilteredClick}
            >
                <RiArrowRightSLine />
                <span> Show filtered ({showFilteredData.length})</span>
            </span>

            <span
                className={`flex items-center space-x-2 cursor-pointer ${innerCategory && "text-green-600 font-bold"}`}
                onClick={() => innerCategory ? dispatch(setInnerCategory("")) : dispatch(setInnerCategory("Medicine"))}
            >
                <RiArrowRightSLine />
                <span>{innerCategory ? `Remove Category (${innerCategory})` : "Show Category (not selected)"}</span>
            </span>
        </p>
    );
};

export default CategoryFilterNavbar;
