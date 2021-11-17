import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";
import { createBrowserHistory } from "history";

import LandingPage from "../screens/LandingPage/LandingPage";
import Page2 from "../screens/Page2";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/page2" component={Page2} />

        <Redirect from="*" to="/" />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
