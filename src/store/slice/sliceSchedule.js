import {createSlice} from '@reduxjs/toolkit';

export const slice = createSlice({
    name: 'schedule',
    initialState: {
        account: [],
        currency: 0,
        ids: [],
        test: [],
    },
    reducers: {
        invoicingCurrent(state, {payload}) {
            state.ids = state.account.map(element => element.id);
            
            if(!state.ids.includes(payload.id)) {
                state.account = [...state.account, payload];
                state.currency = state.account.reduce((acc, curr) => acc + curr.price, 0);
            }
        },
        subtriateCurrent(state, {payload}){
            state.ids = state.account.map(element => element.id);
            if(state.ids.includes(payload.id)) {
                state.ids = state.ids.filter((element) => element.id !== payload.id);
                state.account = state.account.filter((element) => element.id !== payload.id)
                state.currency = state.account.filter(element => element.id !== payload.id)
                             .reduce((acc, curr) => acc + curr.price, 0);
            }
        },
        getIds(state, {payload: id}) {
            //if(!state.ids.includes(id)) state.ids = [...state.ids, id];
        }
    }
});

export const { invoicingCurrent, subtriateCurrent,  getIds} = slice.actions;

export default slice.reducer;