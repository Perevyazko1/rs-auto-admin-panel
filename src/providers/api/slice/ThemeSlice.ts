import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface ThemeState {
    isLoading:boolean
    theme: boolean
}

const initialState: ThemeState = {

    isLoading:false,
    theme: true
}

export const themeAppSlice = createSlice({
    name: 'themeApp',
    initialState,
    reducers: {
        themeApp(state, action: PayloadAction<boolean>){
            state.theme = action.payload
        },


    }
})

export default themeAppSlice.reducer;