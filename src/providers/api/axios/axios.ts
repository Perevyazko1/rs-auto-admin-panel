import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;
import {useCookies} from "react-cookie";
import {useState} from 'react';
import axios, {AxiosResponse} from 'axios';


interface Token {
    refresh: string;
    access: string

}


// Доступ к refreshToken из cookies

export const API_URL = "http://127.0.0.1:8000/"

const $api = axios.create({
    // withCredentials: true,
    baseURL: API_URL
})
$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})
$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    if (error.response.status === 401 && error.config && !error.config._retry) {
        error.config._retry = true; // Установка флага повторной попытки, чтобы избежать бесконечной петли повторных запросов
        try {
            const body = {
                'refresh': sessionStorage.getItem("refresh")

            }

            const response = await axios.post<Token>(`${API_URL}organization_app/api/token/refresh/`, body)
            localStorage.setItem("token", response.data.access)
            return $api.request(error.config);
        } catch (e) {
            console.log(e, "Пользователь не авторизован")
        }

    }
    return Promise.reject(error); // Возврат оригинальной ошибки, если обновление токена не удалось
})
// export default $api


interface AxiosHookResponse<T> {
    data: T | null;
    error: any;
    loading: boolean;
    executeRequest: (method: string, url: string, requestData?: any) => Promise<void>;
}

const useAxios = <T>(): AxiosHookResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const executeRequest = async (method: string, url: string, requestData?: any) => {
        const headers = {
            'Content-Type': 'application/json', // Пример стандартного заголовка

        };

        setLoading(true);
        try {
            let response: AxiosResponse<T>;
            switch (method.toUpperCase()) {
                case 'GET':
                    response = await $api.get<T>(url, {headers});
                    break;
                case 'POST':
                    response = await $api.post<T>(url, requestData, {headers});
                    break;
                case 'PUT':
                    response = await $api.put<T>(url, requestData, {headers});
                    break;
                default:
                    throw new Error('Unsupported method');
            }
            // console.log(response.data)
            setData(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    return {data, error, loading, executeRequest};
};

export default useAxios;

