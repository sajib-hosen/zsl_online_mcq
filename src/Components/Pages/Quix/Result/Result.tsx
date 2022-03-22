import React, { useEffect, useState } from 'react';
import { studentTypes } from '../../../Types/onlineMcqTypes';
import { useSelector } from 'react-redux';
import { RootState } from '../../../appStore/store';
import { Cell, Pie, PieChart } from 'recharts';
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';
type studentProps = {
    currentStudent: studentTypes,
}

type chartData = {
    name: string;
    value: number;
}[]

const Result = (props: studentProps) => {
    const [ piChartData, setChartData] = useState({} as chartData)

    const result = useSelector((state: RootState)=>state.stuAns.value)
    useEffect(()=>{
        let currectAns = 0;
        let inCurrAns = 0;
        for(let i = 0; i < result.length; i++){
            if(result[i].currAns === result[i].stuAns){
                currectAns += 1;
            }
            else{
                inCurrAns += 1
            }
        }
        const chartD = [
            { name: "Current Marks", value: currectAns },
            { name: "Incurrect Marks", value: inCurrAns },
        ]
        setChartData(chartD)
    },[ result ])

    const COLORS = ["#0088FE", "#00C49F"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }: any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
        return (
          <text x={x} y={y} fill="white" textAnchor={x > cx ? "start" : "end"} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
          </text>
        );
    };

    return (
        <div style={{ width: '100%',}} >
        <Box sx={{ display: 'flex', justifyContent: 'center', p: 1, m: 1, bgcolor: 'background.paper', borderRadius: 1, }}>
            <Card sx={{ maxWidth: 445 }}>
                <Typography>Currect Answer: {piChartData[0]?.value}</Typography>
                <Typography>Incurrect Answer: {piChartData[1]?.value}</Typography>
                <CardContent>
                    <PieChart width={400} height={300}>
                        <Pie labelLine={false} label={renderCustomizedLabel} data={piChartData} dataKey="value" cx={200} cy={200} outerRadius={80} fill="#8884d8" />
                    </PieChart>
                </CardContent>
            </Card>
        </Box>
    </div>
    );
};

export default Result;