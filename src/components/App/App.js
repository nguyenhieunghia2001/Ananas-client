import "bootstrap/dist/css/bootstrap.min.css";
//caousel slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//ant design
import "antd/dist/antd.css";

import "./App.scss";
import "./lib.scss";
import Layout from "../../pages/Layout/index";
import HomePage from "../../pages/Home/HomePage";
import ProductPage from "../../pages/Product/ProductPage";
import ProductDetailPage from "../../pages/ProductDetail/ProductDetailPage";
import LovePage from "../../pages/Love/LovePage";
import CartPage from "../../pages/Cart/CartPage";
import CartFixed from "../Cart/CartFixed/CartFixed";
import RegisterPage from "../../pages/Auth/RegisterPage";
import LoginPage from "../../pages/Auth/LoginPage";
import AccountPage from "../../pages/Account/AccountPage";
import CheckoutPage from "../../pages/Checkout/ChecckoutPage";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import OrderSuccessPage from "../../pages/Checkout/OrderSuccessPage";
import PurchasePage from "../../pages/Purchase/PurchasePage";
import PurchaseDetailPage from "../../pages/PurchaseDetail/PurchaseDetailPage";
import Routes from "../../admin/Routes";
import AccountProvider from "../../context/AccountContext";
import ProductLoveProvider from "../../context/ProductLoveContext";
import CartProvider from "../../context/CartContext";
import ScrollToTop from "../ScrollTotop";
import { Helmet } from "react-helmet";
const TITLE = 'Ananas - Cảm ơn bạn đã chọn tôi!!'

function App() {
  return (
    <Router>
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>
      <ScrollToTop />
      <Switch>
        <Route path="/admin/:slug">
          <Switch>
            <Route path="/" component={Routes} />
          </Switch>
        </Route>
        <Route>
          <AccountProvider>
            <ProductLoveProvider>
              <CartProvider>
                <Layout>
                  <Switch>
                    <Route path="/" exact>
                      <HomePage />
                    </Route>
                    <Route path="/products" exact>
                      <ProductPage />
                    </Route>
                    <Route path="/product/:id" exact>
                      <ProductDetailPage />
                    </Route>
                    <PrivateRoute path="/love" exact component={LovePage} />
                    <PrivateRoute path="/cart" exact component={CartPage} />
                    <Route path="/auth/login" exact>
                      <LoginPage />
                    </Route>
                    <Route path="/auth/register" exact>
                      <RegisterPage />
                    </Route>
                    <PrivateRoute path="/account" component={AccountPage} />
                    <Route path="/checkout" exact>
                      <CheckoutPage />
                    </Route>
                    <Route path="/checkout/ordersuccess" exact>
                      <OrderSuccessPage />
                    </Route>
                    <PrivateRoute
                      path="/purchase"
                      exact
                      component={PurchasePage}
                    />
                    <PrivateRoute
                      path="/purchase/detail"
                      exact
                      component={PurchaseDetailPage}
                    />
                  </Switch>
                </Layout>
                <CartFixed />
              </CartProvider>
            </ProductLoveProvider>
          </AccountProvider>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
