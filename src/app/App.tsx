import React from 'react';
import logo from '../logo.svg';
import {Drawer} from "@mui/material";
import DrawerBar from "../shared/ui/Drawer/DrawerBar";
import {createTheme, ThemeProvider} from "@mui/material";
import {ThemeSwitch} from "../shared/ui/ThemeSwitch/ThemeSwitch";
import {useAppSelector} from "../shared/hooks/Redux/redux";
import {Route, Routes} from "react-router-dom";
import {RecordPage} from "../pages/RecordPay/RecordPage";
import {MainPage} from "../pages/MainPage/MainPage";
import {SettingPage} from "../pages/SettingPay/SettingPage";


function App() {
    const {theme} = useAppSelector(state => state.themeAppSlice)

    const darkTheme = createTheme({
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
            </Routes>

            <DrawerBar/>
        </ThemeProvider>
    );
}

export default App;
