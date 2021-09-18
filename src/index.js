import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import "./App.css";
import reportWebVitals from "./reportWebVitals";
import AppRouter, { history } from "./routers/AppRouter";
import ConfigureStore from "./store/ConfigureStore";
import { getBlogsFromDatabase , clearBlogs } from "./actions/BlogActions";
import { firebase } from "./firebase/firebaseConfig";
import { loginAction, logoutAction} from "./actions/AuthActions"

const store = ConfigureStore();

const result = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

let isRendered = false;
const renderApp = () => {
  if (!isRendered) {
    ReactDOM.render(result, document.getElementById("root"));
    isRendered = true;
  }
};

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    store.dispatch(loginAction(user.uid))
    store.dispatch(getBlogsFromDatabase()).then(() => {
      renderApp();

      if (history.location.pathname === "/") {
        history.push("/blogs");
      }
    });
  } else {
    store.dispatch(logoutAction());
    store.dispatch(clearBlogs());
    renderApp();
    console.log("kullanıcı çıkış yapmış");
    history.push("/");
  }
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
