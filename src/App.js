import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Blog from "./pages/Blog/Blog";
import ContactUs from "./pages/ContactUs/ContactUs";
import Newsletter from "./pages/Newsletter/Newsletter";
import NavBar from "./components/nav/NavigationBar";
import Mainpage from "./pages/mainpage/Mainpage";
import Footer from "./components/Footer/Footer";

import "./App.css";
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/" component={Mainpage} />
          <Route path="/aboutUs" component={AboutUs} />
          <Route path="/blog" component={Blog} />
          <Route path="/contactUs" component={ContactUs} />
          <Route path="/newsletter" component={Newsletter} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
