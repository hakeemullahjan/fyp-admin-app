import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

const SignIn = lazy(() => import("./views/SignIn"));
const SignUp = lazy(() => import("./views/SignUp"));
const Dashboard = lazy(() => import("./views/Dashboard"));
const NotFound = lazy(() => import("./views/NotFound"));

const App = ({}) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route
            exact
            path="/signin"
            render={(props) => <SignIn {...props} />}
          />
          <Route exact path="/" render={() => <Redirect to="/signin" />} />
          <Route
            exact
            path="/signup"
            render={(props) => <SignUp {...props} />}
          />
          <Route
            exact
            path="/dashboard"
            render={(props) => <Dashboard {...props} />}
          />
          <Route render={(props) => <NotFound {...props} />} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
