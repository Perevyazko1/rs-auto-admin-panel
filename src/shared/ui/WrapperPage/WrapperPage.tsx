import {memo, ReactNode} from 'react';
import CustomTable from "../CustomTable/CustomTable";
import * as React from "react";
import {styled} from "@mui/material/styles";
import {MiniDrawer} from "../MiniDrawer/MiniDrawer";

interface WrapperPageProps {
    className?: string
    children?: ReactNode
}


export const WrapperPage = memo((props: WrapperPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
            <MiniDrawer>
                {children}
            </MiniDrawer>
    );
});