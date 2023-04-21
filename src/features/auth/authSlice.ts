import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// define interface user
interface initialState {
    id: string,
    username: string,
    email: string,
    roles: string[],
    loading: boolean,
    authenticated: boolean
}

// define initialstate

let initialState = {
    id: '',
    username: '',
    email: '',
    roles: [],
    loading: false,
    authenticated: false
}


// create slice

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUserData(state, action: PayloadAction<any>){
            
            state.id = action.payload.data.id
            state.username = action.payload.data.username
            state.email = action.payload.data.email
            state.roles = action.payload.data.roles
            state.authenticated = true

        },
        clearUserData(state){
            state.id = ''
            state.username = ''
            state.email = ''
            state.roles = []
            state.authenticated = false
        }
    },
    extraReducers: {}
})

export const { setUserData, clearUserData } = authSlice.actions

export default authSlice.reducer