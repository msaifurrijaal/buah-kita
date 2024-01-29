import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PopupLoading = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
      <div className="bg-white rounded-lg shadow-md p-8 flex flex-col justify-center">
        <FontAwesomeIcon icon={faSpinner} size="2xl" color="#4E9F3D" />
        <h1 className="text-2xl font-semibold mt-3">Loading....</h1>
      </div>
    </div>
  );
};

export default PopupLoading;
