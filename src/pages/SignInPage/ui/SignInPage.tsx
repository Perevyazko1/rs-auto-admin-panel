import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {postApi} from "../../../providers/api/RtkService";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";
import {useAppdispatch} from "../../../shared/hooks/Redux/redux";
import {themeAppSlice} from "../../../providers/api/slice/ThemeSlice";
import {authAppSlice} from "../../../providers/api/slice/AuthSlice";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function SignIn() {
    const nav = useNavigate()
    const dispatch = useAppdispatch()
    const {authApp} = authAppSlice.actions
    const {user} = authAppSlice.actions
    const [username, setUsername] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [auth, {data, isLoading, error}] = postApi.useAuthMutation()
    const [cookies, setCookie] = useCookies(['refreshToken']);

// Сохранение refresh токена в куки
    useEffect(() => {
        // console.log(cookies)
    }, [cookies]);

    useEffect(() => {
        // setCookie('refreshToken', data?.refresh, {path: '/sign', httpOnly: true, secure: true});
        // data && localStorage.setItem("token", data?.access)
        // console.log(data)
        if (data?.access) {
            // nav("/")
        }
    }, [data]);
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log(data)
        auth({
            username: `${data.get('username')}`,
            password: `${data.get('password')}`
        })
    };

    const submit = async () => {
        try {

            const body = {
                username: username,
                password: password
            }
            const response = await axios.post('http://127.0.0.1:8000/organization_app/api/token/', body);
            console.log(response.data);

            if(response.data){
                localStorage.setItem("token", response.data?.access)
                sessionStorage.setItem("refresh",response.data?.refresh)
            }

            if (response.data?.access){
                dispatch(authApp(true))
                nav("/")
            }

            // Обработка данных от сервера
        } catch (error) {
            console.error('Ошибка запроса:', error);
            // Обработка ошибки
        }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline/>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        {/*<LockOutlinedIcon />*/}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Вход
                    </Typography>
                    <TextField
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Логин"
                        name="username"
                        autoComplete="username"
                        autoFocus
                    />
                    <TextField
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Пароль"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />
                    {/*<FormControlLabel*/}
                    {/*  control={<Checkbox value="remember" color="primary" />}*/}
                    {/*  label="Remember me"*/}
                    {/*/>*/}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2}}
                        onClick={submit}
                    >
                        Войти
                    </Button>
                    {/*<Grid container>*/}
                    {/*  <Grid item xs>*/}
                    {/*    <Link href="#" variant="body2">*/}
                    {/*      Forgot password?*/}
                    {/*    </Link>*/}
                    {/*  </Grid>*/}
                    {/*  <Grid item>*/}
                    {/*    <Link href="#" variant="body2">*/}
                    {/*      {"Don't have an account? Sign Up"}*/}
                    {/*    </Link>*/}
                    {/*  </Grid>*/}
                    {/*</Grid>*/}
                </Box>
                <Copyright sx={{mt: 8, mb: 4}}/>
            </Container>
        </ThemeProvider>
    );
}

export default SignIn