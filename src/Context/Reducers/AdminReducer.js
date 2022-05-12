import { adminConstants } from "../../lib/constants/adminConstants";
const AdminReducer = (state, action) => {
  switch (action.type) {
    case adminConstants.QUERY_ACTIVITIES_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case adminConstants.QUERY_ACTIVITIES_SUCCESS:
      return {
        ...state,
        activities: action.payload,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.QUERY_ACTIVITIES_FAILURE:
      return {
        ...state,
        activities: action.payload,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.CREATE_WALLET_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case adminConstants.CREATE_WALLET_SUCCESS:
      return {
        ...state,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.CREATE_WALLET_FAILURE:
      return {
        ...state,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.CREDIT_WALLET_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case adminConstants.CREDIT_WALLET_SUCCESS:
      return {
        ...state,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.CREDIT_WALLET_FAILURE:
      return {
        ...state,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.DEBIT_WALLET_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case adminConstants.DEBIT_WALLET_SUCCESS:
      return {
        ...state,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.DEBIT_WALLET_FAILURE:
      return {
        ...state,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.QUERY_WALLET_HISTORY_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case adminConstants.QUERY_WALLET_HISTORY_SUCCESS:
      return {
        ...state,
        walletHistory: action.payload,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.QUERY_WALLET_HISTORY_FAILURE:
      return {
        ...state,
        walletHistory: action.payload,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.QUERY_WALLETS_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case adminConstants.QUERY_WALLETS_SUCCESS:
      return {
        ...state,
        wallets: action.payload,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.QUERY_WALLETS_FAILURE:
      return {
        ...state,
        wallets: action.payload,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.LOGIN_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case adminConstants.LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        credentials: action.credentials,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.LOGIN_FAILURE:
      return {
        ...state,
        user: action.payload,
        status: action.status,
        message: action.message,
        loading: false,
      };
    case adminConstants.LOGOUT_PROGRESS:
      return {
        ...state,
        loading: true,
      };
    case adminConstants.LOGOUT_SUCCESS:
      return {
        activities: {},
        wallets: [],
        walletHistory: {},
        user: {},
        credentials: "",
        loading: false,
      };
    default:
      return state;
  }
};

export default AdminReducer;
