import React from "react";

const Details = ({ details, closeModal }) => {
  return (
    <div
      id="menu"
      className="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
    >
      <div className="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
        <div className="w-96 md:w-auto  relative flex flex-col   bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
          <div className="flex justify-between">
            <span className="font-bold">Action: </span>
            <span>{details.action}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Wallet Number: </span>
            <span>{details.wallet.walletNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Account ID: </span>
            <span>{details.wallet.accountId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Previous Balance: </span>
            <span>{details.previousBalance}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Amount: </span>
            <span>{details.amount}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">New Balance: </span>
            <span>{details.newBalance}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Transaction ID: </span>
            <span>{details.transactionId}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Narration: </span>
            <span>{details.narration}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-bold">Performed By: </span>
            <span>{details.performedBy}</span>
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
