import React from "react";
import { Route, Switch } from "react-router";
import LayoutAdmin from "./Layout/Layout";
import LoginPage from "./Page/Auth/LoginPage";
import AddCustomerPage from "./Page/Customer/AddCustomerPage";
import CustomerPage from "./Page/Customer/CustomerPage";
import EditCustomerPage from "./Page/Customer/EditCustomerPage";
import AddProductPage from "./Page/Product/AddProductPage";
import EditProductPage from "./Page/Product/EditProductPage";
import ProductPage from "./Page/Product/ProductPage";
import PrivateRoute from "./PrivateRoute";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/admin/login">
        <LoginPage />
      </Route>
      {/* <Route> */}

      <LayoutAdmin>
        {/* <Switch> */}
        <PrivateRoute path="/admin/dashboard" exact component={LoginPage} />
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
        {/* </Switch> */}
      </LayoutAdmin>
      {/* </Route> */}
    </Switch>
  );
};

export default Routes;
