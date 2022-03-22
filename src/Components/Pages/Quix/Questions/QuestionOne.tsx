import { Card, CardContent, CardMedia, Typography, Button, CardActions, Box, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addResult } from '../../../Features/resultSlice';
import { studentTypes } from '../../../Types/onlineMcqTypes';
type studentProps = {
    currentStudent: studentTypes,
}

const QuestionOne = (props: studentProps) => {
    const {language} = props.currentStudent;
    const dispatch = useDispatch();

    const getResult = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const quesAns = { queNum: 1, currAns: "8080", stuAns: e.target.value}
        dispatch(addResult(quesAns))
    }

    return (
        <div style={{ width: '100%',}} >
            <Box  sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, }}>
                <Card sx={{ maxWidth: 445 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">Question</Typography>
                        <FormControl>
                            <FormLabel id="demo-row-radio-buttons-group-label">{language === "বাংলা" ? "ওয়েবপ্যাক ডেভ সার্ভারের জন্য ডিফল্ট পোর্ট কি?" : "What is the default port for webpack dev server?"}</FormLabel>
                                <RadioGroup onChange={(e)=>{getResult(e)}} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                    <FormControlLabel value="3000" control={<Radio />} label={language === "বাংলা" ? "৩০০০" : "3000"} />
                                    <FormControlLabel value="8080" control={<Radio />} label={language === "বাংলা" ? "৮০৮০" : "8080"} />
                                    <FormControlLabel value="3306" control={<Radio />} label={language === "বাংলা" ? "৩৩০৬" : "3306"} />
                                    <FormControlLabel value="8809" control={<Radio />} label={language === "বাংলা" ? "৮৮০৯" : "8809"} />
                                </RadioGroup>
                            </FormControl>
                    </CardContent>
                </Card>
            </Box>
        </div>
    );
};

export default QuestionOne;