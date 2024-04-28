import {memo, ReactNode, useEffect} from 'react';
import CustomTable from "../../../shared/ui/CustomTable/CustomTable";
import * as React from "react";
import {WrapperPage} from "../../../shared/ui/WrapperPage/WrapperPage";
import {postApi} from "../../../providers/api/RtkService";
import useAxios from "../../../providers/api/axios/axios";
import axios from "axios";
import $api from "../../../providers/api/axios/axios";

interface MainPageProps {
    className?: string
    children?: ReactNode
}


const MainPage = memo((props: MainPageProps) => {
    const {data, error, loading, executeRequest} = useAxios<ResponseType>();

    useEffect(() => {
        const fetchData = async () => {
            try {

                await executeRequest('GET', 'organization_app/get_reception/');
                // const req = await $api.get('http://127.0.0.1:8000/organization_app/get_reception/');
                // console.log(req.data)
                console.log(data)

            } catch (error) {
                console.error('Ошибка получения данных:', error);
            }
        };

        fetchData();
    }, []);
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <WrapperPage>
            <div>
                {/*<CustomTable/>*/}
            </div>
        </WrapperPage>
    );
});
export default MainPage