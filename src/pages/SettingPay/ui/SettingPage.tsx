import {memo, ReactNode} from 'react';
import {WrapperPage} from "../../../shared/ui/WrapperPage/WrapperPage";

interface SettingPageProps {
    className?: string
    children?: ReactNode
}


const SettingPage = memo((props: SettingPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <WrapperPage>
            {children}
            setting
        </WrapperPage>
    );
});
export default SettingPage