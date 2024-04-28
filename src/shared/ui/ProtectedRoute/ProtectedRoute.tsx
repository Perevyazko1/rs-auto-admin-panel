import {Children, memo, ReactElement, ReactNode} from 'react';
import {Navigate} from "react-router-dom";

interface ProtectedRouteProps {
    className?: string
    component: ReactElement
    isAuth: boolean
}


const ProtectedRoute = (props: ProtectedRouteProps) => {
    const {
        className,
        component,
        isAuth,
        ...otherProps
    } = props

    if (isAuth) {
        return (
            component
        );

    }else {
        return <Navigate to={"/sign"}/>
    }
};
export default ProtectedRoute