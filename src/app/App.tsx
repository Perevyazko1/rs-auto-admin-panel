import React from 'react';
import logo from '../logo.svg';
import {Drawer} from "@mui/material";
import DrawerBar from "../shared/ui/Drawer/DrawerBar";
import {createTheme, ThemeProvider} from "@mui/material";
import {ThemeSwitch} from "../shared/ui/ThemeSwitch/ThemeSwitch";
import {useAppSelector} from "../shared/hooks/Redux/redux";


function App() {
    const {theme} = useAppSelector(state => state.themeAppSlice)

    const darkTheme = createTheme({
        palette: {
            mode: `${theme? "dark" : "light"}`,
        },
    });


    return (
        <ThemeProvider theme={darkTheme}>
            <DrawerBar/>
        </ThemeProvider>
    );
}

export default App;
