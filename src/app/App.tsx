import React from 'react';
import {createTheme, ThemeProvider} from "@mui/material";
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

        </ThemeProvider>
    );
}

export default App;
