import React, {StrictMode} from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import {useAppSelector} from "../shared/hooks/Redux/redux";
import {Route, Routes} from "react-router-dom";
import {RecordPage} from "../pages/RecordPay";
import {MainPage} from "../pages/MainPage";
import {SettingPage} from "../pages/SettingPay";
import {SignInPage} from "../pages/SignInPage";
import ProtectedRoute from "../shared/ui/ProtectedRoute/ProtectedRoute";
import {UnknownPage} from "../pages/404Page";


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

// TODO убрать стрикт мод перед деплоем
    return (
            <ThemeProvider theme={darkTheme}>
                <Routes>
                    <Route path={"/"} element={<ProtectedRoute isAuth={isAuth.auth} component={<MainPage/>}/>}/>
                    <Route path={"/setting"}
                           element={<ProtectedRoute isAuth={isAuth.auth} component={<SettingPage/>}/>}/>
                    <Route path={"/record"} element={<ProtectedRoute isAuth={isAuth.auth} component={<RecordPage/>}/>}/>
                    <Route path={"/sign"} element={<SignInPage/>}/>
                    <Route path={"*"} element={<UnknownPage/>}/>
                </Routes>
            </ThemeProvider>
    );
}

export default App;
