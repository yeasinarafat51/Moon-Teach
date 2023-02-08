import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore} from "redux";
import productReducers from "./productReducer";

const store = createStore(productReducers,);

export default store;