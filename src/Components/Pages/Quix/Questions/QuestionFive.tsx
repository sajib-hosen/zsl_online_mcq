import { Box, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography, TextField } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addResult } from '../../../Features/resultSlice';
import { studentTypes } from '../../../Types/onlineMcqTypes';
type studentProps = {
    currentStudent: studentTypes,
}

const QuestionFive = (props: studentProps) => {
    const {language} = props.currentStudent;
    const dispatch = useDispatch();

    const getResult = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        const quesAns = { queNum: 5, currAns: "3000", stuAns: e.target.value}
        dispatch(addResult(quesAns))
    }
    return (
        <div style={{ width: '100%',}} >
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, }}>
            <Card sx={{ maxWidth: 445 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{language === "বাংলা" ? "বাংলা 5" : "English 5"}</Typography>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">{language === "বাংলা" ? "React js সার্ভারের জন্য ডিফল্ট পোর্ট কি?" : "What is the default port for React js server?"}</FormLabel>
                        <TextField onChange={(e)=>{getResult(e)}} label='Answer'  margin='dense' size='medium'></TextField>
                        </FormControl>
                </CardContent>
            </Card>
        </Box>
    </div>
    );
};

export default QuestionFive;