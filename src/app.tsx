import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Counter } from "./features/counter/counter";

export const App = ({...props}) => {

    return(
        <>
            <h1>This is The App Compoohnent!</h1>
            {/* Quick and dirty menu */}

            <nav>
                <ul>
                    <li>
                        <Link to={'about'}>About Us</Link>
                    </li>
                    <li>
                        <Link to={'booking'}>Booking Here</Link>
                    </li>
                    <li>
                        <Link to={'contact'}>Contact Us</Link>
                    </li>
                    <li>
                        <Link to={'login'}>Login Here</Link>
                    </li>
                </ul>
            </nav>

            <Outlet/>
        </>
    )

}