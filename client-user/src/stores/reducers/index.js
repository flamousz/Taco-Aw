import { combineReducers } from "redux";
import foodReducer from "./foodReducer";
import loadingReducer from './loadingReducer'

let reducers = combineReducers({
    foodReducer,
    loadingReducer
})


export default reducers