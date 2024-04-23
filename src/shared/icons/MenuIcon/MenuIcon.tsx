import {memo, ReactNode} from 'react';
import {useAppSelector} from "../../hooks/Redux/redux";

interface MenuIconProps {
    className?: string
    children?: ReactNode
    theme: boolean
}


export const MenuIcon = memo((props: MenuIconProps) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props


    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"
             width="35"
             height="35"
             fill={theme ? "white" : "rgba(34,35,35,0.94)"}
        >
            <rect y="11" width="24" height="2" rx="1"/>
            <rect y="4" width="24" height="2" rx="1"/>
            <rect y="18" width="24" height="2" rx="1"/>
        </svg>

    );
});