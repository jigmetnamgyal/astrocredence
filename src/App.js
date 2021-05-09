import {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Homepage from './pages/Homepage/Homepage';
import AboutUs from './pages/AboutUs/AboutUs';
import Blog from './pages/Blog/Blog';
import ContactUs from './pages/ContactUs/ContactUs';
import Newsletter from './pages/Newsletter/Newsletter';
import NavBar from './components/nav/NavigationBar';
import SideBar from './components/SideBar/Sidebar';

import './App.css'
function App() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }
    return (
        <Router>
            <div className="App">
              <NavBar />
                <Switch>
                    <Route exact path="/" component={Homepage}/>
                    <Route path="/aboutUs" component={AboutUs}/>
                    <Route path="/blog" component={Blog}/>
                    <Route path="/contactUs" component={ContactUs}/>
                    <Route path="/newsletter" component={Newsletter}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
