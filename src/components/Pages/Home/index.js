import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../../Context/GlobalState";
import Success from "../../Modals/Success";
import Failure from "../../Modals/Failure";
import { ThreeDots } from "react-loader-spinner";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const navigate = useNavigate();
  /* const location = useLocation();

  const from = location.state?.from?.pathname || "/"; */

  const { login, user, loading, status, message } = useContext(GlobalContext);

  const handleSubmit = (e) => {
    setIsSubmitted(true);
    e.preventDefault();
    login(username, password);
  };
  const closeModal = () => {
    setIsSubmitted(false);
  };
  useEffect(() => {
    if (user && user.role === "ROLE_ADMIN") {
      navigate("/dashboard", { replace: true });
    }
    if (user && user.role === "ROLE_USER") {
      navigate("/user/wallet-history", { replace: true });
    }
  }, [user, navigate]);

  return (
    <>
      <div className="flex items-center justify-center h-20 shadow-md ml-3">
        <h1 className="text-3xl uppercase text-blue-700">
          Microsystems CashPoint
        </h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex  justify-center mt-20">
          <div className="bg-white rounded-md w-11/12 bg-white sm:w-8/12 md:w-1/2 lg:w-4/12  shadow-md">
            <h1 className="text-center text-lg font-bold text-gray-500">
              SIGN IN
            </h1>
            <div className="space-y-4 mt-6">
              <div className="w-full">
                <input
                  type="text"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                  className=" block w-full p-3 mt-2 text-gray-700 bg-gray-50 appearance-none focus:outline-none focus:bg-gray-50 focus:shadow-inner"
                />
              </div>

              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className=" block w-full p-3 mt-2 text-gray-700 bg-gray-50 appearance-none focus:outline-none focus:bg-gray-50 focus:shadow-inner"
              />
            </div>
            <button className="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight">
              Sign In
            </button>
          </div>
        </div>
      </form>
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

export default Home;
