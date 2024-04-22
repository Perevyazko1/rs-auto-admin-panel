import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ThemeState {
    isLoading:boolean
    theme: string
}

const initialState: ThemeState = {

    isLoading:false,
    theme: "dark"
}

export const themeAppSlice = createSlice({
    name: 'themeApp',
    initialState,
    reducers: {
        themeApp(state, action: PayloadAction<string>){
            state.theme = action.payload
        },


    }
})

export default themeAppSlice.reducer;