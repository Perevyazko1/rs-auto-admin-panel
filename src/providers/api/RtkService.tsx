import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {Photos} from "./models/Photos";
import {Args} from "./models/Args";

interface Auth {
    username: string;
    password: string
}
interface Token {
    refresh: string;
    access: string
}
export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl:"http://127.0.0.1:8000/organization_app/",
        headers: {
    // 'Authorization': "token ab609d160173aa13aded7e95552d017221f601cd",
    'Content-Type': 'application/json'}
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        getData: build.query<Photos[],Args>({
            query:({param , source})=>({
                url: `/api/token/` ,

        }),
            // providesTags: result => ["Post"]
        }),
        auth: build.mutation<Token,Auth>({
            query:({username , password})=>({
                url: `/api/token/` ,
                method: 'POST',
                body:{
                    username:username,
                    password:password
                }

        }),
            // providesTags: result => ["Post"]
        }),
})
})