import {memo, ReactNode, useEffect} from 'react';
import CustomTable from "../../../shared/ui/CustomTable/CustomTable";
import * as React from "react";
import {WrapperPage} from "../../../shared/ui/WrapperPage/WrapperPage";
import {postApi} from "../../../providers/api/RtkService";

interface MainPageProps {
    className?: string
    children?: ReactNode
}


const MainPage = memo((props: MainPageProps) => {

    const {data, isLoading, error} = postApi.useGetDataUserQuery({param: "", source: ""})
    useEffect(() => {
       console.log(data)
    }, [data]);
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