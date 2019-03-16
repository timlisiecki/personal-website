import React, { Component } from 'react';

import Navbar from '../components/Navbar/Navbar';
import SideDrawer from '../components/SideDrawer/SideDrawer';
import Backdrop from '../components/Backdrop/Backdrop';
import Hero from '../components/Hero/Hero';
import Content from '../components/Content/Content';
import DummyContent from '../components/DummyContent/DummyContent';
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
                <Hero />
                <Content>
                    <DummyContent />
                </Content>
            </div>
        );
    }
}

export default App;
