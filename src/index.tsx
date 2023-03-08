import React from 'react';
import { createRoot } from 'react-dom/client';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app';
import { About } from './routes/about';
import { Booking } from './routes/Booking';
import { Contact } from './routes/contact';
import { Login } from './routes/login';
// import './css/main.scss';
// import 'bootstrap';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'about',
                element: <About/>
            },
            {
                path: 'booking',
                element: <Booking/>
            },
            {
                path: 'contact',
                element: <Contact/>
            },
            {
                path: 'login',
                element: <Login/>
            }
        ]
    },
]);

createRoot(document.getElementById("main") || document.createElement("div"))
.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);
