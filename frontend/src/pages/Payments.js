import React, { useState, useEffect } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";

// pages
import Payments_Overview from "./Payments_Overview";
import Payments_List from "./Payments_List";
import Payments_Add from "./Payments_Add";
import Payments_Edit from "./Payments_Edit";
import Expences_Edit from "./Expences_Edit";

// styles
import "../styles/payments.css";
import Expences_Add from "./Expences_Add";
import Expences_List from "./Expences_List";

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
            <i className="fas fa-list"></i> Payment list
          </NavLink>
          <NavLink activeClassName="active" to="/payments/add">
            <i className="fas fa-money-bill-wave"></i> Payment add
          </NavLink>
          <NavLink activeClassName="active" to="/payments/expence_list">
            <i className="fas fa-users"></i> Expence list
          </NavLink>
          <NavLink activeClassName="active" to="/payments/expence_add">
            <i className="fas fa-cogs"></i> Expence add
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
            <Route path="/payments/expence_list" component={Expences_List}></Route>
            <Route
              path="/payments/expence_add"
              component={Expences_Add}
            ></Route>
            <Route
              path="/payments/edit/:id"
              render={(props) => <Expences_Edit {...props} />}
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
