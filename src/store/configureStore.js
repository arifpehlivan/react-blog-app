import {  createStore ,combineReducers } from "redux";
import blogReducer from "../reducers/blogs";
import authReducer from "../reducers/auth";

const configureStore = () => {
    const store = createStore(
        combineReducers({
            blogs: blogReducer,
            auth: authReducer
        })
    );
    return store
}

export default configureStore
