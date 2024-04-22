import React from 'react';
import logo from '../logo.svg';
import {Drawer} from "@mui/material";
import DrawerBar from "../shared/ui/Drawer/DrawerBar";
import {createTheme, ThemeProvider} from "@mui/material";
import {ThemeSwitch} from "../shared/ui/ThemeSwitch/ThemeSwitch";


function App() {
    const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});


    return (
        <ThemeProvider theme={darkTheme}>

            <DrawerBar/>
        </ThemeProvider>
    );
}

export default App;
