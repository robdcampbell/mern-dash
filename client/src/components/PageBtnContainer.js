import { useAppContext } from "../context/appContext";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";

const PageBtnContainer = () => {
  const { numOfPages, page } = useAppContext();

  const prevPage = () => {
    console.log("previous page");
  };
  const nextPage = () => {
    console.log("next page");
  };

  return (
    <Wrapper>
      <button className="prev-btn" onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">buttons</div>
      <button className="next-btn">
        next
        <HiChevronDoubleRight onClick={nextPage} />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
