import React from 'react';
import { createSlice } from '@reduxjs/toolkit';
import { initialStuAns, resultAct } from '../Types/onlineMcqTypes';

const initialState: initialStuAns = {
    value: []
}

const resultSlice = createSlice({
    name: 'stuAns',
    initialState,
    reducers:{
        addResult: (state, action: resultAct)=>{
            state.value.splice(action.payload.queNum - 1, 1, action.payload )
        }
    }
});

export const { addResult } = resultSlice.actions;
export default resultSlice.reducer;