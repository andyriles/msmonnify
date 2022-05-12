import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateWallet from "././components/Pages/CreateWallet/index";
import Home from "././components/Pages/Home";
import CreditWallet from "././components/Pages/CreditWallet/index";
import Dashboard from "././components/Pages/Dashboard/";
import DebitWallet from "././components/Pages/DebitWallet/";
import ViewAllWallets from "././components/Pages/ViewAllWallets/";
import WalletHistory from "././components/Pages/WalletHistory/";
/* import Header from "./components/Header/index";
import Navbar from "./components/Navbar/Navbar"; */

import { GlobalProvider } from "./Context/GlobalState";
import RequireAuth from "./lib/utilities/RequireAuth";
import RequireUserAuth from "./lib/utilities/RequireUserAuth";
import Error404 from "./lib/Error404";

function App() {
  return (
    <GlobalProvider>
      <Router>
        <div className="App">
          {/* <Header />
          <Navbar />  */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="/create-wallet"
              element={
                <RequireAuth>
                  <CreateWallet />
                </RequireAuth>
              }
            />
            <Route
              path="/view-all-wallets"
              element={
                <RequireAuth>
                  <ViewAllWallets />
                </RequireAuth>
              }
            />
            <Route
              path="/credit-wallet"
              element={
                <RequireAuth>
                  <CreditWallet />
                </RequireAuth>
              }
            />
            <Route
              path="/debit-wallet"
              element={
                <RequireAuth>
                  <DebitWallet />
                </RequireAuth>
              }
            />
            <Route
              path="/wallet-history"
              element={
                <RequireAuth>
                  <WalletHistory />
                </RequireAuth>
              }
            />
            <Route
              path="/user/wallet-history"
              element={
                <RequireUserAuth>
                  <WalletHistory />
                </RequireUserAuth>
              }
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
      </Router>
    </GlobalProvider>
  );
}

export default App;
