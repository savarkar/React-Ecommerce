import handleCart from './handleCart'
import { combineReducers } from "redux";
import searchReducer from './searchReducer';
const rootReducers = combineReducers({
    handleCart,
    searchReducer
})
export default rootReducers