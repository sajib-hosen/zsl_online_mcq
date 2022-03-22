import { Box, Card, CardContent, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addResult } from '../../../Features/resultSlice';
import { studentTypes } from '../../../Types/onlineMcqTypes';
type studentProps = {
    currentStudent: studentTypes,
}

const QuestionTwo = (props: studentProps) => {
    const {language} = props.currentStudent;
    const dispatch = useDispatch();

    const getResult = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const quesAns = { queNum: 2, currAns: "3", stuAns: e.target.value}
        dispatch(addResult(quesAns))
    }

    return (
        <div style={{ width: '100%',}} >
        <Box  sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, }}>
            <Card sx={{ maxWidth: 445 }}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">{language === "বাংলা" ? "বাংলা 2" : "English 2"}</Typography>
                    <FormControl>
                        <FormLabel id="demo-row-radio-buttons-group-label">{language === "বাংলা" ? "React js লাইফ সাইকেলে কয়টি ধাপ রয়েছে" : "How many stages are there in React js life cycle"}</FormLabel>
                            <RadioGroup onChange={(e)=>{getResult(e)}} row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" >
                                <FormControlLabel value="4" control={<Radio />} label={language === "বাংলা" ? "৪" : "4"} />
                                <FormControlLabel value="2" control={<Radio />} label={language === "বাংলা" ? "২" : "2"} />
                                <FormControlLabel value="3" control={<Radio />} label={language === "বাংলা" ? "৩" : "3"} />
                                <FormControlLabel value="1" control={<Radio />} label={language === "বাংলা" ? "১" : "1"} />
                            </RadioGroup>
                        </FormControl>
                </CardContent>
            </Card>
        </Box>
    </div>
    );
};

export default QuestionTwo;