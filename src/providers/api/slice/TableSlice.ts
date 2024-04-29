import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TableRowType} from "../models/TableRowType";


export interface TableState {
    tableData:TableRowType[]
}


const initialState: TableState = {
    tableData: []

}

export const tableAppSlice = createSlice({
    name: 'tablehApp',
    initialState,
    reducers: {
        tableApp(state, action: PayloadAction<TableRowType[]>) {
            state.tableData = action.payload
        },


    }
})

export default tableAppSlice.reducer;