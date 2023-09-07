// rcc
import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
// router
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
// Routes
import PlayerList from './components/player/PlayerList';
import PlayerCreate from './components/player/PlayerCreate';
import PlayerView from './components/player/PlayerView';
import PlayerUpdate from './components/player/PlayerUpdate';

const router = createBrowserRouter([
    {
        path: "/player/view/:id",
        element: <PlayerView />
    },
    {
        path: "/player/list",
        element: <PlayerList />
    },
    {
        path: "/player/create",
        element: <PlayerCreate />
    },
    {
        path: "/player/update/:id",
        element: <PlayerUpdate />
    },
    {
        path: "/",
        element: <Main />
    },
    {
        path: "*",
        element: <Navigate to="/" />
    }
]);

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
                <Header logo="fa-solid fa-basketball" />
                <div className='container'>
                    <RouterProvider router={router} />
                </div>
                <Footer copy="© 2021 Copyright: Players" />
            </>
        )
    }
}
export default withTranslation()(RouterPlayer);