import {FC, lazy, Suspense} from "react";
export const SignInPageAsync = lazy<FC>(()=> import("./SignInPage"))

export const DetailsSignInComponent = () => (
    <Suspense>
        <SignInPageAsync/>
    </Suspense>
)