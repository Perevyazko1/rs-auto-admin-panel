import {memo, ReactNode} from 'react';

interface SettingPageProps {
    className?: string
    children?: ReactNode
}


export const SettingPage = memo((props: SettingPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <div
        >
            {children}
            setting
        </div>
    );
});