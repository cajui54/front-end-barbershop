import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slice/sliceSchedule'

const store = configureStore({
    reducer : {
        reducerSchedule: userReducer
    }
});

export default store;