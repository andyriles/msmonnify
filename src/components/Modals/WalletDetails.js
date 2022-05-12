import React from "react";

const Details = ({ details, closeModal }) => {
  return (
    <div
      id="menu"
      className="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
    >
      <div className="2xl:container  2xl:mx-auto py-48 px-2 md:px-28 flex justify-center items-center">
        <div className="w-96 md:w-auto  relative flex flex-col   bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
          <div className="flex justify-between">
            <span className="font-bold">Wallet Number: </span>
            <span>{details.walletNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Account Id: </span>
            <span>{details.accountId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Account Name: </span>
            <span>{details.accountName}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Lien: </span>
            <span>{details.lien}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Balance: </span>
            <span>{details.balance}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Email: </span>
            <span>{details.email}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Active: </span>
            <span>{details.active}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Created At: </span>
            <span>{details.createdAt}</span>
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

export default Details;
