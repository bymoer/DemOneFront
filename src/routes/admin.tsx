import React from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, Outlet } from "react-router-dom";
import { useLogoutMutation } from "../features/api/apiSlice";
import { useAppDispatch } from "../app/hooks";
import { clearUserData } from "../features/auth/authSlice";

export const Admin = ({...props}) => {

    const [logout] = useLogoutMutation()

    const dispatch = useAppDispatch()

    const {authenticated, roles, username} = useSelector(
        (state: any) => state.auth
    )

    const onLogoutClicked = async () => {
        try{
            await logout().then(() => dispatch(clearUserData()))
        }catch(err){
            console.log(err)
        }
    }
    
    // If admin or moderator diff!!

    if(!authenticated){
        return <Navigate replace to='/login' />
    } else {

        return(
            <>
                <h1>Admin Page</h1>
                <p>Welcome {username}</p>
                <button onClick={onLogoutClicked}>LOGOUT</button>

                <nav>
                    <ul>
                        <li>
                            <Link to={'adminbookings'}>Bookings</Link>
                        </li>
                        <li>
                            <Link to={'adminemployees'}>Employees</Link>
                        </li>
                        <li>
                            <Link to={'admintasks'}>Tasks</Link>
                        </li>
                        <li>
                            <Link to={'adminrooms'}>Rooms</Link>
                        </li>
                        <li>
                            <Link to={'adminhotels'}>Hotels</Link>
                        </li>
                    </ul>
                </nav>

                <Outlet/>
            </>
        )

    }

}