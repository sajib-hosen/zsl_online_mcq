import { Autocomplete, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { storStudent } from '../../Features/studentSlice';
import { studentTypes } from '../../Types/onlineMcqTypes';

const initStudent: studentTypes = {
    name:"",
    id: "",
    gender: "",
    language:""
}

const StudentForm = () => {
    const options = ['English', 'বাংলা'];
    const [lang, setLang] = React.useState<string | null>(options[0]);
    const [studentData, setStudentData] = useState<studentTypes>(initStudent)
    const dispatch = useDispatch();
    const natigate = useNavigate()

    const getStudentInfo = <Q extends keyof studentTypes>(prop: Q, value: studentTypes[Q]) =>{ //getting data from input field
        setStudentData({...studentData, [prop]: value, language: lang });
    }

    useEffect(()=>{ // let language on language state change.
        setStudentData({...studentData, language: lang });
    },[lang])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement | HTMLInputElement>)=>{ 
        console.log( studentData )
        dispatch(storStudent(studentData)) //stpring student data to the redux store.
        natigate('/quiz') // redirecting to the quiz page
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}} >
                <TextField onChange={(e)=>{getStudentInfo('name', e.target.value.toString())}} required label='Student Name' margin='dense' size='medium'></TextField>
                <TextField onChange={(e)=>{getStudentInfo('id', e.target.value.toString())}} required label='Student ID'  margin='dense' size='medium'></TextField>
                <FormControl >
                    <FormLabel required id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                    <RadioGroup
                        row
                        aria-labelledby="demo-row-radio-buttons-group-label"
                        onChange={(e)=>{getStudentInfo('gender', e.target.value.toString())}}
                    >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                    </RadioGroup>
                </FormControl>

                <Autocomplete aria-required value={lang}
                    onChange={(event: any, newValue: string | null) => {
                        console.log( newValue )
                    setLang(newValue);
                    }}
                    id="controllable-states-demo"
                    options={options}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Controllable" />}
                />
                <Button type='submit' variant="outlined" >Start Quiz</Button>
            </form>
        </div>
    );
};

export default StudentForm;