import { Box, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addResult } from '../../../Features/resultSlice';
import { studentTypes } from '../../../Types/onlineMcqTypes';
type studentProps = {
    currentStudent: studentTypes,
}

const QuestionFour = (props: studentProps) => {
    const {language} = props.currentStudent;
    const dispatch = useDispatch();

    const getResult = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const quesAns = { queNum: 4, currAns: "True", stuAns: e.target.value}
        dispatch(addResult(quesAns))
    }
    return (
        <div style={{ width: '100%',}} >
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, }}>
            <Card sx={{ maxWidth: 445 }}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">Question</Typography>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">{language === "বাংলা" ? "React js কার্যক্ষমতা বাড়াতে ভার্চুয়াল DOM ব্যবহার করে।" : "React js use vertual DOM to increase performance."}</FormLabel>
                            <RadioGroup onChange={(e)=>{getResult(e)}} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                <FormControlLabel value="True" control={<Radio />} label={language === "বাংলা" ? "সত্য" : "True"} />
                                <FormControlLabel value="False" control={<Radio />} label={language === "বাংলা" ? "মিথ্যা" : "False"} />
                            </RadioGroup>
                        </FormControl>
                </CardContent>
            </Card>
        </Box>
    </div>
    );
};

export default QuestionFour;