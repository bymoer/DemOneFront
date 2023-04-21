import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { useLoginMutation, useLogoutMutation } from "../features/api/apiSlice";
import { setUserData, clearUserData } from "../features/auth/authSlice";
import { Navigate } from "react-router-dom";

export const Login = ({...props}) => {
    const [inputUserName, setInputUserName] = useState('')
    const [inputPassword, setInputPassword] = useState('')

    const dispatch = useAppDispatch()

    const [login] = useLoginMutation()
    // Logout should be moved to admin / mod header
    const [logout] = useLogoutMutation() 

    // Grab state from authSlice
    const {authenticated, roles, username} = useSelector(
        (state: any) => state.auth
    )

    useEffect(() => {

        if(authenticated){

            // roles.forEach((role: string) => {
            //     if(role.toLowerCase() === 'role_admin'){
                    
            //     } else if (role.toLowerCase() === 'role_moderator') {
                    
            //     }
            // });

        } else {
            // Present some error !?
            console.log('No user!')
        }

    }, [authenticated, username])

    const onLoginClicked = async () => {

        try{

            // Maybe include some safety checks here.....
            await login({username: inputUserName, password: inputPassword})
            .then((data) => dispatch(setUserData(data)))

        } catch(err) {
            console.log(err)
        }

    }

    const onLogoutClicked = async () => {
        try{
            await logout().then(() => dispatch(clearUserData()))
        }catch(err){
            console.log(err)
        }
    }

    const handleChange = (event: any) => {
        if(event.target.id === 'userName'){
            return setInputUserName(event.target.value)
        } else if(event.target.id === 'password'){
            return setInputPassword(event.target.value)
        }
    }

    if(authenticated){
        
        // Check if user moderator or admin & redirect accordingly
        return <Navigate replace to='/admin' />

    } else {
        
        return(
            <div>
                <h1>Login Page</h1>
                <p>This is the Login page</p>
                <button onClick={onLoginClicked}>Login</button>
                <button onClick={onLogoutClicked}>Logout</button>
                <p>Hello</p>
                <p>Username: {inputUserName}</p>
                <p>Password: {inputPassword}</p>
                <input type='text' id='userName' onChange={handleChange}/>
                <input type='text' id='password' onChange={handleChange}/>
            </div>
        )

    }

}
