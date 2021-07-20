import { combineReducers, createStore } from "redux";

import CategoyReducer from "./Reducers/Category.Reducer";

const RootReducer = combineReducers ({
    categories: CategoyReducer,
})

export default createStore(RootReducer);