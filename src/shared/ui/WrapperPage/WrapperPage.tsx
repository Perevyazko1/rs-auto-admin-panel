import {memo, ReactNode} from 'react';
import CustomTable from "../CustomTable/CustomTable";
import * as React from "react";
import {styled} from "@mui/material/styles";
import {MiniDrawer} from "../MiniDrawer/MiniDrawer";

interface WrapperPageProps {
    className?: string
    children?: ReactNode
}

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

export const WrapperPage = memo((props: WrapperPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <div
        >
            <MiniDrawer>
                {children}
            </MiniDrawer>
        </div>
    );
});