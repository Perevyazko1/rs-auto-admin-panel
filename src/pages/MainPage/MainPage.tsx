import {memo, ReactNode} from 'react';
import CustomTable from "../../shared/ui/CustomTable/CustomTable";
import * as React from "react";
import {WrapperPage} from "../../shared/ui/WrapperPage/WrapperPage";

interface MainPageProps {
    className?: string
    children?: ReactNode
}


export const MainPage = memo((props: MainPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <WrapperPage>
            <div>
                <CustomTable/>
            </div>
        </WrapperPage>
    );
});