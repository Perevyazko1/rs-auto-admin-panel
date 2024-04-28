import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface Organization {
    geolocation: string
    telegram_name: string
    phone: string
    name_organization: string
    logo_organization: string
    email: string
    username: string

}

interface Auth {
    auth: boolean
    user: string

}

export interface AuthState {
    userData: Organization
    isAuth: Auth
}
const organization = localStorage.getItem("organization")
const initialState: AuthState = {


    userData: {
        geolocation: "",
        telegram_name: "",
        phone: "",
        name_organization: "",
        logo_organization: "",
        email: "",
        username: "",

    },
    isAuth: {
        auth: !!sessionStorage.getItem("refresh"),
        user: organization? organization :"Неизвестно"
    }
}

export const authAppSlice = createSlice({
    name: 'authApp',
    initialState,
    reducers: {
        authApp(state, action: PayloadAction<Auth>) {
            state.isAuth = action.payload
        },
        user(state, action: PayloadAction<Organization>) {
            state.userData = action.payload
        },


    }
})

export default authAppSlice.reducer;