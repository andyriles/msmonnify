import FailureIcon from "../../lib/assets/failed.svg";

const Failure = ({ message, closeModal }) => {
  return (
    <div
      id="menu"
      className="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
    >
      <div className="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
        <div className="w-96 md:w-auto  relative flex flex-col   bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
          <div className="w-30 h-30 flex justify-center">
            <img alt="failed" src={FailureIcon} />
          </div>
          <div className="flex justify-center item-center mt-4">
            <p> {message}</p>
          </div>
          <button
            onClick={closeModal}
            className="text-gray-800 dark:text-gray-400 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            aria-label="close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Failure;
