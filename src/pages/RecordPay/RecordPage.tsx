import {memo, ReactNode} from 'react';

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
        <div
        >
            {children}
            record
        </div>
    );
});