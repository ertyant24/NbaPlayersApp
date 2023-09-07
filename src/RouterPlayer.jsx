// rcc
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

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
                <div>
                    Router Player Page ...
                </div>
            </>
        )
    }
}
export default withTranslation()(RouterPlayer);