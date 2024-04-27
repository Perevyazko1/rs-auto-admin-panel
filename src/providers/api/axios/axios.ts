import axios from "axios"
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {useCookies} from "react-cookie";


interface Token {
    refresh: string;
    access: string

}


  // Доступ к refreshToken из cookies

export const API_URL = "http://127.0.0.1:8000/"

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})
$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    if (error.response.status === 401 && !error.config._retry) {
        error.config._retry = true; // Установка флага повторной попытки, чтобы избежать бесконечной петли повторных запросов
        try {
            const [cookies] = useCookies(['refreshToken']);
            const headers = {
                'Content-Type': 'application/json', // Пример стандартного заголовка
                'Authorization': `Bearer ${cookies.refreshToken}`
            };

            const response = await axios.get<Token>(`${API_URL}api/token/refresh/`, {headers})

            localStorage.setItem("token", response.data.access)
            return $api.request(error.config);
        } catch (e) {
            console.log("Пользователь не авторизован")
        }

    }
return Promise.reject(error); // Возврат оригинальной ошибки, если обновление токена не удалось
})
export default $api

