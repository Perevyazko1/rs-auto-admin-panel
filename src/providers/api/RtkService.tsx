import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";

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
        baseUrl:"http://127.0.0.1:8000/",
        headers: {
    // 'Authorization': "token ab609d160173aa13aded7e95552d017221f601cd",
    'Content-Type': 'application/json'}
    }),
    tagTypes: ['Post'],
    endpoints: (build) => ({
        getDataUser: build.query({
            query:()=>({
                url: `organization_app/organization/` ,
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem("token")}`
                }

        }),
            // providesTags: result => ["Post"]
        }),
        auth: build.mutation<Token,Auth>({
            query:({username , password})=>({
                url: `organization_app/api/token/` ,
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