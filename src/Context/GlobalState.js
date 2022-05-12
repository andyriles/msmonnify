import { createContext, useReducer, useEffect } from "react";
import AdminReducer from "./Reducers/AdminReducer";
import { adminConstants } from "../lib/constants/adminConstants";
import { urlConstants } from "../lib/constants/urlConstants";
const LOCAL_STORAGE_KEY = "currentUser";
const initialState = {
  activities: {},
  wallets: [],
  walletHistory: {},
  loading: false,
  user: localStorage.getItem(LOCAL_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    : {},
  credentials: localStorage.getItem("credentials")
    ? JSON.parse(localStorage.getItem("credentials"))
    : "",
};

//const cors = "https://cors-anywhere.herokuapp.com/";

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.user));
    localStorage.setItem("credentials", JSON.stringify(state.credentials));
  }, [state]);

  const fetchAllActivities = async (page, size) => {
    dispatch({ type: adminConstants.QUERY_ACTIVITIES_PROGRESS });
    await fetch(
      `${urlConstants.BASE_URL}/admin/wallet/all?page=${page}&size=${size}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${state.credentials}`,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.responseCode === "00") {
          dispatch({
            type: adminConstants.QUERY_ACTIVITIES_SUCCESS,
            payload: res.data,
            status: res.responseCode,
            message: res.responseMessage,
          });
        } else {
          dispatch({
            type: adminConstants.QUERY_ACTIVITIES_FAILURE,
            payload: res.data,
            status: res.status,
            message: res.error,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const createWallet = async (walletData) => {
    dispatch({ type: adminConstants.CREATE_WALLET_PROGRESS });
    await fetch(
      `${urlConstants.BASE_URL}/admin/wallet?name=dolore proident occaecat`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${state.credentials}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(walletData),
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.responseCode === "00") {
          dispatch({
            type: adminConstants.CREATE_WALLET_SUCCESS,
            status: res.responseCode,
            message: res.responseMessage,
          });
        } else {
          dispatch({
            type: adminConstants.CREATE_WALLET_FAILURE,
            status: res.responseCode,
            message: res.responseMessage,
          });
        }
      })
      .catch((err) => console.log(err));
  };

  const creditWallet = async (walletData) => {
    dispatch({ type: adminConstants.CREDIT_WALLET_PROGRESS });
    await fetch(`${urlConstants.BASE_URL}/admin/credit?`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${state.credentials}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(walletData),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.responseCode === "00") {
          dispatch({
            type: adminConstants.CREDIT_WALLET_SUCCESS,
            status: res.responseCode,
            message: res.responseMessage,
          });
        } else {
          dispatch({
            type: adminConstants.CREATE_WALLET_FAILURE,
            status: res.responseCode,
            message: res.responseMessage,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const debitWallet = async (walletData) => {
    dispatch({ type: adminConstants.DEBIT_WALLET_PROGRESS });
    await fetch(`${urlConstants.BASE_URL}/admin/debit?`, {
      method: "POST",
      headers: {
        Authorization: `Basic ${state.credentials}`,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(walletData),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.responseCode === "00") {
          dispatch({
            type: adminConstants.DEBIT_WALLET_SUCCESS,
            status: res.responseCode,
            message: res.responseMessage,
          });
        } else {
          dispatch({
            type: adminConstants.DEBIT_WALLET_FAILURE,
            status: res.responseCode,
            message: res.responseMessage,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const fetchWalletHistory = async (walletNumber, type) => {
    dispatch({ type: adminConstants.QUERY_WALLET_HISTORY_PROGRESS });
    await fetch(
      `${urlConstants.BASE_URL}/${type}/history?page=0&size=20&wallet-number=${walletNumber}`,
      {
        method: "GET",
        headers: {
          Authorization: `Basic ${state.credentials}`,
        },
      }
    )
      .then((response) => response.json())
      .then((res) => {
        if (res.responseCode === "00") {
          dispatch({
            type: adminConstants.QUERY_WALLET_HISTORY_SUCCESS,
            payload: res.data,
            status: res.responseCode,
            message: res.responseMessage,
          });
        } else {
          dispatch({
            type: adminConstants.QUERY_WALLET_HISTORY_FAILURE,
            payload: res.data,
            status: res.status,
            message: res.error,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const fetchAllWallets = async () => {
    dispatch({ type: adminConstants.QUERY_WALLETS_PROGRESS });
    await fetch(`${urlConstants.BASE_URL}/admin/wallets?`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${state.credentials}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.responseCode === "00") {
          dispatch({
            type: adminConstants.QUERY_WALLETS_SUCCESS,
            payload: res.data,
            status: res.responseCode,
            message: res.responseMessage,
          });
        } else {
          dispatch({
            type: adminConstants.QUERY_WALLETS_FAILURE,
            payload: res.data,
            status: res.status,
            message: res.error,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const login = async (username, password) => {
    const credentials = btoa(username + ":" + password);
    dispatch({ type: adminConstants.LOGIN_PROGRESS });
    await fetch(`${urlConstants.BASE_URL}/user/login?`, {
      method: "GET",
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.responseCode === "00") {
          dispatch({
            type: adminConstants.LOGIN_SUCCESS,
            payload: res.data,
            credentials: credentials,
            status: res.responseCode,
            message: res.responseMessage,
          });
        } else {
          dispatch({
            type: adminConstants.LOGIN_FAILURE,
            payload: res.data,
            status: res.status,
            message: res.error,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  const logout = async () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    dispatch({ type: adminConstants.LOGOUT_PROGRESS });
    dispatch({ type: adminConstants.LOGOUT_SUCCESS });
  };
  return (
    <GlobalContext.Provider
      value={{
        activities: state.activities,
        walletHistory: state.walletHistory,
        user: state.user,
        wallets: state.wallets,
        loading: state.loading,
        status: state.status,
        message: state.message,
        fetchAllActivities,
        createWallet,
        creditWallet,
        debitWallet,
        fetchWalletHistory,
        login,
        logout,
        fetchAllWallets,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
