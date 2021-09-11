import React, { useState, useEffect } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

// pages
import Payments_Overview from "./Payments_Overview";
import Payments_List from "./Payments_List";
import Payments_Add from "./Payments_Add";
import Payments_Edit from "./Payments_Edit";
import Payments_Users from "./Payments_Users";
import Payments_Settings from "./Payments_Settings";

// styles
import "../styles/payments.css";

const Payments = (props) => {
  return (
    <div>
      {/* =============================== */}
      {/* =========== Sidebar =========== */}
      {/* =============================== */}
      <div className="paymentsContainer">
        <div className="payments_sidebar">
          <NavLink activeClassName="active" to="/payments/overview">
            <i className="far fa-chart-bar"></i>Overview
          </NavLink>
          <NavLink activeClassName="active" to="/payments/list">
            <i className="fas fa-list"></i> List
          </NavLink>
          <NavLink activeClassName="active" to="/payments/add">
            <i className="fas fa-money-bill-wave"></i>add
          </NavLink>
          <NavLink activeClassName="active" to="/payments/users">
            <i className="fas fa-users"></i> Users
          </NavLink>
          <NavLink activeClassName="active" to="/payments/settings">
            <i className="fas fa-cogs"></i> Settings
          </NavLink>
        </div>

        {/* ======================================== */}
        {/* =========== Payment contents =========== */}
        {/* ======================================== */}
        <div className="payments_content">
          <Switch>
            <Route
              path="/payments/overview"
              component={Payments_Overview}
            ></Route>
            <Route path="/payments/list" component={Payments_List}></Route>
            <Route path="/payments/add" component={Payments_Add}></Route>
            <Route
              path="/payments/edit/:id"
              render={(props) => <Payments_Edit {...props} />}
            ></Route>
            <Route path="/payments/users" component={Payments_Users}></Route>
            <Route
              path="/payments/settings"
              component={Payments_Settings}
            ></Route>

            <Route
              render={() => <Redirect to="/payments/overview"></Redirect>}
            />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Payments;
