import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import SinglePage from "./pages/SinglePage";
import Layout from "./components/Layout";

const Routes = () => {
  return (
    <Layout>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/article/:id">
          <SinglePage />
        </Route>
      </Switch>
    </Layout>
  );
};
export default Routes;
