import {combineReducers, createStore, } from "redux";
import GetPriceReducer from "./reducers/GetPriceReducer";
import WalletReducer from "./reducers/WalletReducer";
import PortfolioReducer from "./reducers/PortfolioReducer";
import FormReducer from "./reducers/FormReducer"

const rootReducer = combineReducers({
    wallet: WalletReducer,
    data: GetPriceReducer,
    portfolio: PortfolioReducer,
    form: FormReducer
})


export const store = createStore(rootReducer)