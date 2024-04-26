import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
import {useAppSelector} from "../shared/hooks/Redux/redux";
import {Route, Routes} from "react-router-dom";
import {RecordPage} from "../pages/RecordPay";
import {MainPage} from "../pages/MainPage";
import {SettingPage} from "../pages/SettingPay";
import SignIn from "../pages/SignInPage/ui/SignInPage";
import {SignInPage} from "../pages/SignInPage";


function App() {
    const {theme} = useAppSelector(state => state.themeAppSlice)

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
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"/setting"} element={<SettingPage/>}/>
                <Route path={"/record"} element={<RecordPage/>}/>
                <Route path={"/sign"} element={<SignInPage/>}/>
            </Routes>

        </ThemeProvider>
    );
}

export default App;
