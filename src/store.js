import { createStore } from "redux";
import rootReducer from "./Redux/Reducers/rootReducer";

const store = createStore(rootReducer);

export default store;