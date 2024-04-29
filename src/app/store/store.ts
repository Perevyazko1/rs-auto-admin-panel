import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postApi} from "../../providers/api/RtkService";
import themeAppSlice from "../../providers/api/slice/ThemeSlice";
import authAppSlice from "../../providers/api/slice/AuthSlice";
import tableAppSlice from "../../providers/api/slice/TableSlice";

const rootReducer = combineReducers({

    themeAppSlice,
    authAppSlice,
    tableAppSlice,
    [postApi.reducerPath]: postApi.reducer
})

export const setupStore =() => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(postApi.middleware)
    })
}
export type RootState = ReturnType<typeof  rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type  AppDispatch = AppStore["dispatch"]
