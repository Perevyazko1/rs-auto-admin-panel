import {FC, lazy, Suspense} from "react";
export const SettingPageAsync = lazy<FC>(()=> import("./SettingPage"))

export const DetailsSettingComponent = () => (
    <Suspense>
        <SettingPageAsync/>
    </Suspense>
)