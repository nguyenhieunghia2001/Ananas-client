import "bootstrap/dist/css/bootstrap.min.css";
//caousel slick
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import "./App.scss";
import "./lib.scss";
import Layout from "../../pages/Layout/index";
import HomePage from '../../pages/Home/HomePage' 

function App() {
  return (
    <Layout>
      <HomePage />        
    </Layout>
  );
}

export default App;
