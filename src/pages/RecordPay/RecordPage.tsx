import {memo, ReactNode} from 'react';
import {WrapperPage} from "../../shared/ui/WrapperPage/WrapperPage";

interface RecordPageProps {
    className?: string
    children?: ReactNode
}


export const RecordPage = memo((props: RecordPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <WrapperPage>
            {children}
            record
        </WrapperPage>
    );
});