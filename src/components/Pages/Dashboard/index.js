import { useContext, useEffect } from "react";
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
function Dashboard() {
  const { fetchAllActivities, activities, loading } = useContext(GlobalContext);
  useEffect(() => {
    fetchAllActivities(0, 20);
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
        <Table headers={headers} activities={activities} />
      )}
    </>
  );
}

export default Dashboard;
