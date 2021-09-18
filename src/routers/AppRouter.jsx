import React from "react";
import { Router, Route, Switch} from "react-router-dom";
import BlogDetailsPage from "../components/BlogDetailsPage";
import BlogListPage from "../components/BlogListPage";
import NotFoundPage from "../components/NotFoundPage";
import AddBlogPage from './../components/AddBlogPage';
import EditBlogPage from './../components/EditBlogPage';
import LoginPage from "../components/LoginPage";
import createHistory from 'history/createBrowserHistory'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import '../style/main.scss'



export const history = createHistory();

export default function AppRouter() {
  return (
    <Router history= {history}>
      <div className="container h-100" >
        

        <Switch>
          <PublicRoute exact path="/" component={LoginPage} />
          <PrivateRoute exact path="/blogs" component={BlogListPage} />
          <PrivateRoute exact path="/create" component={AddBlogPage} />
          <PrivateRoute exact path="/edit/:id" component={EditBlogPage} />
          <PrivateRoute path="/blogs/:id" component={BlogDetailsPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </Router>
  );
}
