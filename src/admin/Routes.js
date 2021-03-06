import React from "react";
import { Route, Switch } from "react-router";
import AccountAdminProvider from "./context/accountAdmin";
import LayoutAdmin from "./Layout/Layout";
import LoginPage from "./Page/Auth/LoginPage";
import AddCustomerPage from "./Page/Customer/AddCustomerPage";
import CustomerPage from "./Page/Customer/CustomerPage";
import EditCustomerPage from "./Page/Customer/EditCustomerPage";
import DashboardPage from "./Page/Dashboards/DashboardPage";
import GeneralPage from "./Page/General/GeneralPage";
import DetailOrderPage from "./Page/Order/DetailOrderPage";
import OrderPage from "./Page/Order/OrderPage";
import AddProductPage from "./Page/Product/AddProductPage";
import EditProductPage from "./Page/Product/EditProductPage";
import ProductPage from "./Page/Product/ProductPage";
import PrivateRoute from "./PrivateRoute";
const Routes = () => {
  return (
    <div
      className="admin"
      style={{
        position: "relative",
        background: "#f3f4f7",
        width: "100%",
        height: "100%",
      }}
    >
      <AccountAdminProvider>
        <Switch>
          <Route exact path="/admin/login">
            <LoginPage />
          </Route>
          {/* <Route> */}

          <LayoutAdmin>
            {/* <Switch> */}
            <PrivateRoute
              path="/admin/dashboard"
              exact
              component={DashboardPage}
            />
            {/* </Switch>
        <Switch> */}
            <PrivateRoute path="/admin/product" exact component={ProductPage} />
            <PrivateRoute
              path="/admin/product/add"
              exact
              component={AddProductPage}
            />
            <PrivateRoute
              path="/admin/product/edit/:id"
              exact
              component={EditProductPage}
            />
            <PrivateRoute
              path="/admin/customer"
              exact
              component={CustomerPage}
            />
            <PrivateRoute
              path="/admin/customer/add"
              exact
              component={AddCustomerPage}
            />
            <PrivateRoute
              path="/admin/customer/edit/:id"
              exact
              component={EditCustomerPage}
            />
            <PrivateRoute path="/admin/general" exact component={GeneralPage} />
            <PrivateRoute path="/admin/order" exact component={OrderPage} />
            <PrivateRoute
              path="/admin/order/detail/:id"
              exact
              component={DetailOrderPage}
            />
            {/* </Switch> */}
          </LayoutAdmin>
          {/* </Route> */}
        </Switch>{" "}
      </AccountAdminProvider>
    </div>
  );
};

export default Routes;
