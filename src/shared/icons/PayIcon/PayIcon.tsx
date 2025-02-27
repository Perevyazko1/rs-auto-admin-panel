import {memo, ReactNode} from 'react';
import {useAppSelector} from "../../hooks/Redux/redux";

interface PayIconProps {
    className?: string
    children?: ReactNode
}


export const PayIcon = memo((props: PayIconProps) => {
    const {theme} = useAppSelector(state => state.themeAppSlice)

    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <svg xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24"
             width="35"
             height="35"
             fill={theme ? "white" : "rgba(34,35,35,0.94)"}
        >
            <path d="M19,3H5A5.006,5.006,0,0,0,0,8H24A5.006,5.006,0,0,0,19,3Z"/>
            <path
                d="M0,16a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V10H0Zm7-.5A1.5,1.5,0,1,1,5.5,14,1.5,1.5,0,0,1,7,15.5"/>
        </svg>
    );
});