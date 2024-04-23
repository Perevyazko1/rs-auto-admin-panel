import {memo, ReactNode} from 'react';
import CustomTable from "../../shared/ui/CustomTable/CustomTable";
import * as React from "react";

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
        <div
        >
            {children}
            main
            <CustomTable/>
        </div>
    );
});