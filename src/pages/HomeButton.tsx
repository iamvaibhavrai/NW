import { useNavigate } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";

const HomeButton = () => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className="shadow-xl border border-gray-300 px-7 py-7 rounded-lg z-50 font-bold text-4xl absolute right-10 top-10"
      onClick={() => navigate("/")}
    >
      <AiFillHome />
    </button>
  );
};

export default HomeButton;
