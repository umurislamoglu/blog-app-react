import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import blogsReducer from "../reducers/BlogsReducer"
import authReducer from "../reducers/AuthReducers"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function ConfigureStore()  {

    const store = createStore(
        combineReducers({
         blogs: blogsReducer,
         auth: authReducer,
       }),
      //  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      composeEnhancers(applyMiddleware(thunk)) 
     );
 return store    
}

