import { useState, useContext } from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import Navbar from "../../Navbar/Navbar";
import Header from "../../Header";
import Success from "../../Modals/Success";
import Failure from "../../Modals/Failure";
import { ThreeDots } from "react-loader-spinner";

function CreateWallet() {
  const [accountId, setAccountId] = useState("");
  const [accountName, setAccountName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { createWallet, status, message, loading } = useContext(GlobalContext);
  const closeModal = () => {
    setIsSubmitted(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    /*  alert(
      `Account ID: ${accountId} \nAccount Name: ${accountName} \nLien: ${lien}`
    ); */
    createWallet({ accountId, accountName, email, lien: 0 });
  };

  return (
    <>
      <Header />
      <Navbar />
      <div className="grid mt-10 place-items-center  ">
        <div className="w-11/12  bg-white sm:w-8/12 md:w-1/2 lg:w-6/12">
          <h1 className="text-3xl font-semibold text-blue-700">
            Create Wallet
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
              name="accountID"
              placeholder="123456789"
              onChange={(e) => setAccountId(e.target.value)}
              value={accountId}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              htmlFor="accountName"
              className="block mt-4 text-sm font-semibold text-gray-600 uppercase flex items-center justify-start"
            >
              Account Name *
            </label>
            <input
              type="text"
              name="accountName"
              placeholder="john doe"
              onChange={(e) => setAccountName(e.target.value)}
              value={accountName}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <label
              htmlFor="lien"
              className="block mt-4 text-sm font-semibold text-gray-600 uppercase flex items-center justify-start"
            >
              Email *
            </label>
            <input
              type="text"
              name="email"
              placeholder="jd@email.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              Create Wallet
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

export default CreateWallet;
