import { Box, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addResult } from '../../../Features/resultSlice';
import { studentTypes } from '../../../Types/onlineMcqTypes';
type studentProps = {
    currentStudent: studentTypes,
}

const QuestionThree = (props: studentProps) => {
    const {language} = props.currentStudent;
    const dispatch = useDispatch();

    const getResult = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const quesAns = { queNum: 3, currAns: "state and props", stuAns: e.target.value}
        dispatch(addResult(quesAns))
    }
    return (
        <div style={{ width: '100%',}} >
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, }}>
            <Card sx={{ maxWidth: 445 }}>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">Question</Typography>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">{language === "বাংলা" ? "React js এ দুটি উপায়ে ডেটা পরিচালনা করা হয় কি?" : "What are two ways to gets handled in React js?"}</FormLabel>
                            <RadioGroup onChange={(e)=>{getResult(e)}} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                <FormControlLabel value="state and props" control={<Radio />} label={language === "বাংলা" ? "স্টেট এন্ড প্রপ্স" : "state and props"} />
                                <FormControlLabel value="services and components" control={<Radio />} label={language === "বাংলা" ? "সার্ভিসেস এন্ড কম্পোনেন্টস" : "services and components"} />
                                <FormControlLabel value="state and services" control={<Radio />} label={language === "বাংলা" ? "স্টেট এন্ড সার্ভিসেস" : "state and services"} />
                                <FormControlLabel value="state and component" control={<Radio />} label={language === "বাংলা" ? "স্টেট এন্ড কম্পোনেন্ট" : "state and component"} />
                            </RadioGroup>
                        </FormControl>
                </CardContent>
            </Card>
        </Box>
    </div>
    );
};

export default QuestionThree;