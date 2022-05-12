import { useContext, useState } from "react";
import { GlobalContext } from "../../Context/GlobalState";
import { Link } from "react-router-dom";
import Details from "../Modals/Details";
const Table = ({ headers, activities }) => {
  const { fetchAllActivities } = useContext(GlobalContext);
  const [details, setDetails] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getNextPage = () => {
    fetchAllActivities(activities?.page + 1, 20);
  };

  const getPreviousPage = () => {
    fetchAllActivities(activities?.page - 1, 20);
  };

  const viewDetails = (id) => {
    const data = activities?.details.find((item) => item.id === id);
    setDetails(data);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="grid mt-10 align-middle w-3/4 mx-auto pl-10">
      <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
        <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
          <table className="min-w-full">
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 border-b-2 border-gray-300 text-left text-lg leading-4 text-blue-500 tracking-wider"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              {activities?.details?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="flex items-center">
                        <div>
                          <div className="text-lg leading-5 text-gray-800">
                            {index + 1}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="flex items-center">
                        <div className="text-lg leading-5 text-blue-900 items-center">
                          {item.wallet.accountId}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 ">
                      <div className="flex items-center">
                        <div
                          className={`text-lg leading-5  items-center ${
                            item.action === "CR"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {item.action}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 ">
                      <div className="flex items-center">
                        <div className="text-lg leading-5 text-blue-900 items-center">
                          {item.amount}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      <div className="flex items-center">
                        <div className="text-lg leading-5 text-blue-900 items-center">
                          {item.previousBalance}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                      <div className="flex items-center">
                        <div className="text-lg leading-5 text-blue-900 items-center">
                          {item.newBalance}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-500 text-lg leading-5">
                      <button
                        id={item.id}
                        className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none"
                        onClick={() => viewDetails(item.id)}
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="sm:flex-1 sm:flex sm:items-center sm:justify-between mt-4 work-sans">
            <div>
              <p className="text-sm leading-5 text-blue-700">
                Showing page{" "}
                <span className="font-semibold">
                  {activities?.currentPage + 1 || 1}
                </span>{" "}
                of{" "}
                <span className="font-semibold">{activities?.totalPages}</span>{" "}
                page(s)
              </p>
            </div>
            {activities?.totalPages > 1 ? (
              activities?.totalPages > activities?.currentPage ? (
                <div>
                  <nav className="relative z-0 inline-flex shadow-sm">
                    <Link
                      to="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                      aria-label="Previous"
                      onClick={getPreviousPage}
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>

                    <div v-if="pagination.current_page < pagination.last_page">
                      <Link
                        to="#"
                        className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                        aria-label="Next"
                        onClick={getNextPage}
                      >
                        <svg
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Link>
                    </div>
                  </nav>
                </div>
              ) : (
                <div>
                  <nav className="relative z-0 inline-flex shadow-sm">
                    <Link
                      to="#"
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                      aria-label="Previous"
                      onClick={getNextPage}
                    >
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Link>

                    {/* <div v-if="pagination.current_page < pagination.last_page">
                  <Link
                    to="#"
                    className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm leading-5 font-medium text-gray-500 hover:text-gray-400 focus:z-10 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-100 active:text-gray-500 transition ease-in-out duration-150"
                    aria-label="Next"
                    onClick={getNextPage}
                  >
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div> */}
                  </nav>
                </div>
              )
            ) : null}
          </div>
        </div>
      </div>
      {isModalOpen ? (
        <Details details={details} closeModal={closeModal} />
      ) : null}
    </div>
  );
};

export default Table;
