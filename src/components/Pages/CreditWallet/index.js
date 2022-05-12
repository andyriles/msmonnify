import { useState, useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import Navbar from "../../Navbar/Navbar";
import Header from "../../Header";
import Success from "../../Modals/Success";
import Failure from "../../Modals/Failure";
import { ThreeDots } from "react-loader-spinner";

function CreditWallet() {
  const [accountId, setAccountId] = useState("");
  const [amount, setAmmount] = useState(0);
  const [narration, setNarration] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { creditWallet, status, loading, message } = useContext(GlobalContext);
  const closeModal = () => {
    setIsSubmitted(false);
  };
  const handleSubmit = (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    creditWallet({
      accountId,
      amount: Number(amount),
      narration,
      transactionId,
    });
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="grid mt-10 place-items-center  ">
        <div className="w-11/12  bg-white sm:w-8/12 md:w-1/2 lg:w-6/12">
          <h1 className="text-3xl font-semibold text-blue-700">
            Credit Wallet
          </h1>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="accountId"
              className="block mt-4 text-sm font-semibold text-gray-600 uppercase flex items-center justify-start"
            >
              Account ID *
            </label>
            <input
              type="text"
              name="accountId"
              placeholder="123456789"
              onChange={(e) => setAccountId(e.target.value)}
              value={accountId}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              htmlFor="amount"
              className="block mt-4 text-sm font-semibold text-gray-600 uppercase flex items-center justify-start"
            >
              Amount *
            </label>
            <input
              type="number"
              name="amount"
              placeholder="100000"
              onChange={(e) => setAmmount(e.target.value)}
              value={amount}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              htmlFor="narration"
              className="block mt-4 text-sm font-semibold text-gray-600 uppercase flex items-center justify-start"
            >
              Narration *
            </label>
            <input
              type="text"
              name="narration"
              placeholder="narration"
              onChange={(e) => setNarration(e.target.value)}
              value={narration}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              htmlFor="transactionId"
              className="block mt-4 text-sm font-semibold text-gray-600 uppercase flex items-center justify-start"
            >
              Transaction ID *
            </label>
            <input
              type="text"
              name="transactionId"
              placeholder="123456789"
              onChange={(e) => setTransactionId(e.target.value)}
              value={transactionId}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Credit Wallet
            </button>
          </form>
        </div>
      </div>
      {isSubmitted ? (
        loading ? (
          <div className="flex justify-center items-center">
            <ThreeDots color="#00BFFF" height={80} width={80} />
          </div>
        ) : status === "00" ? (
          <Success message={message} closeModal={closeModal} />
        ) : (
          <Failure message={message} closeModal={closeModal} />
        )
      ) : null}
    </>
  );
}

export default CreditWallet;
