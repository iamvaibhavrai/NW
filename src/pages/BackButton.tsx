import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="shadow-xl border border-gray-300 px-7 py-7 rounded-lg z-50 font-bold text-4xl left-10 top-10 absolute"
      onClick={() => navigate(-1)}
    >
      <BiArrowBack />
    </button>
  );
};

export default BackButton;
