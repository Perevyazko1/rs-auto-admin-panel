import {memo, ReactNode} from 'react';

interface MenuIconProps {
    className?: string
    children?: ReactNode
}


export const MenuIcon = memo((props: MenuIconProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24"
             width="35"
             height="35"
             fill="white"
        >
            <rect y="11" width="24" height="2" rx="1"/>
            <rect y="4" width="24" height="2" rx="1"/>
            <rect y="18" width="24" height="2" rx="1"/>
        </svg>

    );
});