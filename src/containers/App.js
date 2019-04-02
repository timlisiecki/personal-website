// Dependencies
import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";

// Pages
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import ResumePage from '../pages/ResumePage';
import PortfolioPage from '../pages/PortfolioPage';
import FeaturesPage from '../pages/FeaturesPage';
import ResourcesPage from '../pages/ResourcesPage';
import ContactPage from '../pages/ContactPage';

// Components
import Navbar from '../components/Navbar/Navbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';
import Footer from '../components/Footer/Footer';

// Styles
import './App.css';

class App extends Component {
    state = {
        sideDrawerOpen: false
    }

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    }

    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});
    }

    render() {
        let backdrop;

        if(this.state.sideDrawerOpen) {
            backdrop = <Backdrop click={this.backdropClickHandler} />;
        }
        return (
            <div className="App" style={{height: "100%"}}>
                <Router>
                    <Navbar drawerClickHandler={this.drawerToggleClickHandler} />

                    <Route exact path="/" component={HomePage} />
                    <Route path="/about" component={AboutPage} />
                    <Route path="/resume" component={ResumePage} />
                    <Route path="/portfolio" component={PortfolioPage} />
                    <Route path="/features" component={FeaturesPage} />
                    <Route path="/resources" component={ResourcesPage} />
                    <Route path="/contact" component={ContactPage} />
                </Router>
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}
                
                <Footer />
            </div>
        );
    }
}

export default App;
