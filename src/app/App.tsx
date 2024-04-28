import React, {Component, useEffect} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import {useAppSelector} from "../shared/hooks/Redux/redux";
import {Route, Routes} from "react-router-dom";
import {RecordPage} from "../pages/RecordPay";
import {MainPage} from "../pages/MainPage";
import {SettingPage} from "../pages/SettingPay";
import SignIn from "../pages/SignInPage/ui/SignInPage";
import {SignInPage} from "../pages/SignInPage";
import ProtectedRoute from "../shared/ui/ProtectedRoute/ProtectedRoute";


function App() {
    const {theme} = useAppSelector(state => state.themeAppSlice)
    const {isAuth} = useAppSelector(state => state.authAppSlice )

    const darkTheme = createTheme({
        typography: {
            fontFamily: 'Raleway, Arial',
            fontSize: 15
        },
        palette: {
            mode: `${theme ? "dark" : "light"}`,
        },
    });


    return (
        <ThemeProvider theme={darkTheme}>
            <Routes>
                <Route path={"/"} element={<ProtectedRoute isAuth={isAuth.auth} component={<MainPage/>}/>}/>
                <Route path={"/setting"} element={<ProtectedRoute isAuth={isAuth.auth}   component={<SettingPage/>}/>}/>
                <Route path={"/record"} element={<ProtectedRoute isAuth={isAuth.auth} component={<RecordPage/>}/>}/>
                <Route path={"/sign"} element={<SignInPage/>}/>
            </Routes>

        </ThemeProvider>
    );
}

export default App;
