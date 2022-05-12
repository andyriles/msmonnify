import { useContext, useState } from "react";
import { GlobalContext } from "../../../Context/GlobalState";
import Navbar from "../../Navbar/Navbar";
import Header from "../../Header";
import Table from "../../Table";
import { ThreeDots } from "react-loader-spinner";

const headers = [
  "S/N",
  "Account ID",
  "Action",
  "Amount",
  "Previous Balance",
  "New Balance",
  "",
];

function WalletHistory() {
  const { fetchWalletHistory, walletHistory, loading, user } =
    useContext(GlobalContext);
  const [walletNumber, setWalletNumber] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const type = user.role === "ROLE_ADMIN" ? "admin" : "wallet";
    fetchWalletHistory(walletNumber, type);
    setClicked(true);
  };
  return (
    <>
      <Header />
      <Navbar />
      <div className="grid mt-10 place-items-center  ">
        <div className="w-11/12  bg-white sm:w-8/12 md:w-1/2 lg:w-6/12">
          <h1 className="text-3xl font-semibold text-blue-700">
            View Wallet History
          </h1>
          <form onSubmit={handleSubmit}>
            <label
              htmlFor="walletNumber"
              className="block mt-4 text-sm font-semibold text-gray-600 uppercase flex items-center justify-start"
            >
              Wallet Number *
            </label>
            <input
              type="text"
              name="walletNumber"
              placeholder="3893akk5-d3df-4ae9-bccf-4a59f193a222"
              onChange={(e) => setWalletNumber(e.target.value)}
              value={walletNumber}
              className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner"
              required
            />
            <button
              type="submit"
              className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none"
            >
              View Wallet History
            </button>
          </form>
        </div>
      </div>
      {clicked ? (
        loading ? (
          <div
            className="flex justify-center items-center"
            style={{ textAlign: "center" }}
          >
            <ThreeDots color="#00BFFF" height={80} width={80} />
          </div>
        ) : walletHistory?.details?.length !== 0 ? (
          <Table headers={headers} activities={walletHistory} />
        ) : (
          <p className="mt-10 text-lg">Wallet does not exist</p>
        )
      ) : null}
    </>
  );
}

export default WalletHistory;
