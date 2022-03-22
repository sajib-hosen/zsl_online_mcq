import { Autocomplete, Box, Button, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { storStudent } from '../../Features/studentSlice';
import { studentTypes } from '../../Types/onlineMcqTypes';
import image from './../../../../public/images/32637547.jpg'

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
                <Typography variant="h3" >Online MCQ</Typography>
                <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center' >
                    <Box display='flex' flexDirection='column' width='50%' padding='20px'>
                        <TextField sx={{width: '100'}} onChange={(e)=>{getStudentInfo('name', e.target.value.toString())}} required label='Student Name' margin='dense' size='medium'></TextField>
                        <TextField onChange={(e)=>{getStudentInfo('id', e.target.value.toString())}} required label='Student ID'  margin='dense' size='medium'></TextField>
                        
                        <Box display='flex' flexDirection="row" justifyContent='space-between'>
                            <Autocomplete aria-required value={lang} onChange={(event: any, newValue: string | null) => { setLang(newValue);}} id="controllable-states-demo" options={options} sx={{ width: 300, marginTop: '8px' }} renderInput={(params) => <TextField {...params} label="Language" />} />
                            <FormControl >
                                <Box display='flex' flexDirection="row" justifyContent='space-between' alignItems='center' sx={{ marginTop: '8px'}}>
                                    <FormLabel required id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" onChange={(e)=>{getStudentInfo('gender', e.target.value.toString())}} >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </Box>
                            </FormControl>
                        </Box>
                        <Button sx={{ marginTop: '10px' }} type='submit' variant="outlined" >Start Quiz</Button>
                    </Box>
                    <Box display='flex' flexDirection='column' width='50%' >
                        {/* <div style={{ height: '100%', widows:"100%", backgroundImage: `url(https://cdn.vectorstock.com/i/1000x1000/75/47/people-study-online-cartoon-vector-32637547.webp)`, backgroundAttachment:"fixed", backgroundPosition:"center", backgroundSize:"cover", backgroundRepeat:"no-repeat" }}>

                        </div> */}
                    </Box>
                </Box>
            </form>
        </div>
    );
};

export default StudentForm;