import { useContext, useEffect } from "react";
import Navbar from "../../Navbar/Navbar";
import Header from "../../Header";
import { GlobalContext } from "../../../Context/GlobalState";
import WalletTable from "../../Table/WalletTable";
import { ThreeDots } from "react-loader-spinner";
const headers = [
  "S/N",
  "Account ID",
  "Wallet Number",
  "Account Name",
  "Balance",
  "Email",
  "",
];
function ViewAllWallets() {
  const { wallets, fetchAllWallets, loading } = useContext(GlobalContext);

  useEffect(() => {
    fetchAllWallets();
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      {loading ? (
        <div
          className="flex justify-center items-center"
          style={{ textAlign: "center" }}
        >
          <ThreeDots color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <WalletTable headers={headers} wallets={wallets} />
      )}
    </>
  );
}

export default ViewAllWallets;
