import {memo, ReactNode} from 'react';

interface UnknownPageProps {
    className?: string
    children?: ReactNode
}


const UnknownPage = memo((props: UnknownPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <div
        >
            404
        </div>
    );
});
export default UnknownPage