import {FC, lazy, Suspense} from "react";
export const RecordPageAsync = lazy<FC>(()=> import("./RecordPage"))

export const DetailsRecordComponent = () => (
    <Suspense>
        <RecordPageAsync/>
    </Suspense>
)