import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'schedule',
    initialState: {
        amountClient: false,
    },
    reducers: {
        countClient(state, {payload}) {
            console.log(payload);
            //state.amountClient = payload;
        },
        loadInfo(state, {payload}){
            
        }
    }
});

export const { countClient, loadInfo } = slice.actions;

export default slice.reducer;