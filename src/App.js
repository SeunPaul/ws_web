import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = ()=>{
    return(
        <div className="root-web">
            <Router>
                <Switch>
                    <Route path = "/" exact>
                        <Home/>
                    </Route>
                    <Route path = "/about" exact>
                        <About/>
                    </Route>
                    <Route path = "/products" exact>
                        <Products/>
                    </Route>
                    <Route path = "/team" exact>
                        <Team/>
                    </Route>
                    <Route path = "/contact" exact>
                        <Contact/>
                    </Route>
                    <Redirect to = "/"/>
                </Switch>
            </Router>
            <Footer/>
        </div>
    )
}

export default App;