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
import BlogList from './components/blog/BlogList';
import BlogCreate from './components/blog/BlogCreate';
import BlogUpdate from './components/blog/BlogUpdate';
import BlogView from './components/blog/BlogView';

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
        path: "/player/update/:id", // İki nokta url' de dinamik oluşturma.
        element: <PlayerUpdate />
    },
    {
        path: "/",
        element: <Main />
    },
    {
        path: "*",
        element: <Navigate to="/" />
    },
    {
        path: "/blog/list",
        element: <BlogList />
    },
    {
        path: "/blog/create",
        element: <BlogCreate />
    },
    {
        path: "/blog/update/:id",
        element: <BlogUpdate />
    },
    {
        path: "/blog/view/:id",
        element: <BlogView />
    },
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
                    <RouterProvider router={router}>
                    </RouterProvider >
                </div>
                <Footer copy="© 2021 Copyright: Players" />
            </>
        )
    }
}
export default withTranslation()(RouterPlayer);