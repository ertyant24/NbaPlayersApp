// rcc
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

// CLASS
class RouterPlayer extends Component {

    // DİSPLAYNAME
    static displayName = "Router_Player";

    constructor(props) {
        super(props);

        // STATE
        this.state = {

        };
        // BIND

    }

    // CDM

    // FUNCTİON


    render() {
        return (
            <>
                <Header/>
                <Main/>
                <Footer/>
            </>
        )
    }
}
export default withTranslation()(RouterPlayer);