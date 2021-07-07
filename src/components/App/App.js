import "bootstrap/dist/css/bootstrap.min.css";
//caousel slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.scss";
import "./lib.scss";
import Layout from "../../pages/Layout/index";
import HomePage from "../../pages/Home/HomePage";
import ProductPage from "../../pages/Product/ProductPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/products" exact>
            <ProductPage />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
