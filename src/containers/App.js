// Dependencies
import React, { Component } from 'react';

// Pages
import HomePage from '../pages/HomePage';

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
                <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
                <SideDrawer show={this.state.sideDrawerOpen} />
                {backdrop}

                <HomePage />
                
                <Footer />
            </div>
        );
    }
}

export default App;
