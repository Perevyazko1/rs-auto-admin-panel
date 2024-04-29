import * as React from 'react';
import {memo, ReactNode} from 'react';
import CustomTable from "../../../shared/ui/CustomTable/CustomTable";
import {WrapperPage} from "../../../shared/ui/WrapperPage/WrapperPage";

interface MainPageProps {
    className?: string
    children?: ReactNode
}


const MainPage = memo((props: MainPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <WrapperPage>
            <CustomTable/>
        </WrapperPage>
    );
});
export default MainPage