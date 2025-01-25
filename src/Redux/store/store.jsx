import { createStore, combineReducers } from "redux";
import UserReducer from "../Reducers/UserReducer";
import BooksReducer from "../Reducers/BooksReducer";


const rootReducer = combineReducers({
  user: UserReducer,
  book:BooksReducer,
});

const store = createStore(rootReducer);

export default store;
