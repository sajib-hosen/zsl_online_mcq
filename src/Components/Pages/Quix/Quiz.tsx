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
import { Link, useNavigate } from 'react-router-dom';

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
        <div><br />
        {queNum >= 5 ||  <div style={{ display:'flex', justifyContent:'space-around',}}>
                <div style={{ width:'350px', display:'flex', justifyContent:'space-around', alignItems: 'center' }}>
                    <div style={{ border:"1px solid black", width: '15px', height: '15px', borderRadius:'50%', backgroundColor:`${queNum === 0 ? '#4A0899' : ''}`}}></div>
                    <div style={{ border:"1px solid black", width: '15px', height: '15px', borderRadius:'50%', backgroundColor:`${queNum === 1 ? '#4A0899' : ''}`}}></div>
                    <div style={{ border:"1px solid black", width: '15px', height: '15px', borderRadius:'50%', backgroundColor:`${queNum === 2 ? '#4A0899' : ''}`}}></div>
                    <div style={{ border:"1px solid black", width: '15px', height: '15px', borderRadius:'50%', backgroundColor:`${queNum === 3 ? '#4A0899' : ''}`}}></div>
                    <div style={{ border:"1px solid black", width: '15px', height: '15px', borderRadius:'50%', backgroundColor:`${queNum === 4 ? '#4A0899' : ''}`}}></div>
                </div>
            </div>}
           
            {
                (queNum === 0 && <QuestionOne currentStudent = {cStudent} />) || (queNum === 1 && <QuestionTwo currentStudent = {cStudent} /> ) || (queNum === 2 && <QuestionThree currentStudent = {cStudent} /> ) || (queNum === 3 && <QuestionFour currentStudent = {cStudent} /> ) || (queNum === 4 && <QuestionFive currentStudent = {cStudent} /> ) || (queNum === 5 && <Result currentStudent = {cStudent} />) || (queNum >= 6 && <div>
                    <p>Thank You !</p>
                    <Link to='/'>Get back to home</Link>
                </div>)
            }
            { queNum >= 6 || <Button variant="outlined" onClick={handleNext}>Next &gt;&gt;</Button> }
        </div>
    );
};

export default Quiz;