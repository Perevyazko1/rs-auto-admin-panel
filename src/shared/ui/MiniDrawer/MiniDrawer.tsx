import * as React from 'react';
import {ReactNode} from 'react';
import {CSSObject, styled, Theme, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {RecordReceptionIcon} from "../../icons/RecordReceptionIcon/RecordReceptionIcon";
import {MenuIcon} from "../../icons/MenuIcon/MenuIcon";
import {SettingsIcon} from "../../icons/SettingsIcon/SettingsIcon";
import {ThemeSwitch} from "../ThemeSwitch/ThemeSwitch";
import {Link} from "react-router-dom";
import {MainIcon} from "../../icons/MainIcon/MainIcon";
import {useAppSelector} from "../../hooks/Redux/redux";
import cls from "./MiniDrawer.module.scss"


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;

}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

interface MiniDrawerProps {
    children?: ReactNode
}

export function MiniDrawer(props: MiniDrawerProps) {
    const {
        children,
    } = props
    const {theme: customTheme} = useAppSelector(state => state.themeAppSlice)
    const {isAuth} = useAppSelector(state => state.authAppSlice)


    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const itemMenu = {
        "Записи": [<MainIcon/>, "/"],
        "Добавить запись": [<RecordReceptionIcon/>, "/record"],
        "Настройки": [<SettingsIcon/>, "/setting"],
        // "Оплата": [<PayIcon/>, "/"],
    }

    return (
        <Box sx={{display: 'flex'}}>
            <CssBaseline/>
            <AppBar position="fixed" open={open}>
                <Toolbar
                    className={cls.toolbar}
                >
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && {display: 'none'}),
                        }}
                    >
                        <MenuIcon theme={true}/>
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {isAuth.user.toUpperCase()}
                    </Typography>
                    <ThemeSwitch/>
                </Toolbar>
            </AppBar>
            <Drawer

                variant="permanent"
                open={open}
                // sx={{backgroundColor: "rgb(43,43,43)"}}

            >
                <DrawerHeader className={cls.headerDrawer}>
                    <IconButton onClick={handleDrawerClose}>
                        {/*<MenuIcon theme={customTheme? !(theme.direction === 'rtl'):(theme.direction === 'rtl')}/>*/}
                        <MenuIcon theme={true}/>
                    </IconButton>
                </DrawerHeader>
                <Divider/>
                <List className={cls.drawer}>
                    {Object.entries(itemMenu).map(([key, value]) => (
                        <Link key={key} style={{textDecoration: 'none', color: 'inherit'}} to={`${value[1]}`}>
                            <ListItem disablePadding sx={{display: 'block', marginTop: "20px"}}>
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 2.5,
                                    }}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        {value[0]}
                                    </ListItemIcon>
                                    <ListItemText primary={key}
                                                  sx={{fontSize: "18px", fontWeight: "bold", opacity: open ? 1 : 0}}/>
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{
                height: "100vh",
                backgroundColor: customTheme ? "rgb(43,43,43)" : "rgba(233, 237, 243, 1)",
                flexGrow: 1, p: 3
            }}>
                <DrawerHeader/>
                {children}
            </Box>
        </Box>
    );
}