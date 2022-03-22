import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../appStore/store';
import { studentTypes } from '../../Types/onlineMcqTypes';
import QuestionFour from './Questions/QuestionFour';
import QuestionOne from './Questions/QuestionOne';
import QuestionThree from './Questions/QuestionThree';
import QuestionTwo from './Questions/QuestionTwo';
import QuestionFive from './Questions/QuestionFive';
import Result from './Result/Result';
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
    const cStudent = useSelector((state: RootState): studentTypes => state.currentStudents.value) // getting stored data from redux store
    const appStore = useSelector((state: RootState) => state) // getting stored data from redux store
    const [queNum, setQueNum] = useState<number>(0);
    const natigate = useNavigate()

    const handleNext = () =>{
        setQueNum(queNum  + 1)
    }

    useEffect(()=>{ // if somehow the student name is losed, redirect ot student form page
        if(!cStudent.name){
            natigate('/')
        }
    },[cStudent])

    return (
        <div>
            {/* <p>Student Name: {cStudent.name}, Student ID: {cStudent.id}</p>
            <p>Preferred Language: {cStudent.language}, Student Gender: {cStudent.gender}</p> */}
            {
                (queNum === 0 && <QuestionOne currentStudent = {cStudent} />) || (queNum === 1 && <QuestionTwo currentStudent = {cStudent} /> ) || (queNum === 2 && <QuestionThree currentStudent = {cStudent} /> ) || (queNum === 3 && <QuestionFour currentStudent = {cStudent} /> ) || (queNum === 4 && <QuestionFive currentStudent = {cStudent} /> ) || (queNum === 5 && <Result currentStudent = {cStudent} />) || (queNum >= 6 && <p>Thank You</p>)
            }
            { queNum >= 6 || <Button variant="outlined" onClick={handleNext}>Next &gt;&gt;</Button> }
        </div>
    );
};

export default Quiz;