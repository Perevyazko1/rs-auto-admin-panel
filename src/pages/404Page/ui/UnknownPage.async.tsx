import {FC, lazy, Suspense} from "react";
export const UnknownPageAsync = lazy<FC>(()=> import("./UnknownPage"))

export const DetailsUnknownComponent = () => (
    <Suspense>
        <UnknownPageAsync/>
    </Suspense>
)