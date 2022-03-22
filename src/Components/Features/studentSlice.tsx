import { createSlice } from '@reduxjs/toolkit';
import React from 'react';
import { actionType, studentTypes } from '../Types/onlineMcqTypes';

type initialStateType = {
    value: studentTypes
}
const initialState: initialStateType = {
    value: {
        name: '',
        gender: '',
        id: '',
        language: ''
    }
}

const studentSlice = createSlice({
    name: 'currentStudents',
    initialState,
    reducers:{
        storStudent: (state, action: actionType)=>{
            state.value = action.payload;
        }
    }
})
export const { storStudent } = studentSlice.actions;
export default studentSlice.reducer;