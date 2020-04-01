import { createStore } from "redux";
import applicationReducer from "../reducers/index";

const store = createStore(applicationReducer);

export default store;
