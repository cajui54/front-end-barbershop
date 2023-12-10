import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slice/sliceSchedule'

const store = configureStore({
    reducer : {
        schedule: userReducer
    }
});

export default store;