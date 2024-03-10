'use client'

import { useTheme } from "next-themes";
import {  Legend, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";


export default function PieChart(){
    const { theme } = useTheme();

    const data = [
        {
            name: 'Falta',
            value: 100, 
            fill: '#d3d3d3',
        },
        {
            name: 'Investido',
            value: 75, 
            fill: '#FD7C39',
        },
          
    ]

    return(
        <div className="bg-[#FFF] dark:bg-[#131417] rounded-xl shadow-xl w-[40%] h-[400px] space-y-5 p-6">
            <h1 className="text-black font-medium text-2xl dark:text-white dark:text-2xl dark:font-medium ">Meta de Investimento</h1>
            <ResponsiveContainer width="100%" height="90%">
            <RadialBarChart cx="50%" cy="40%" innerRadius="60%" outerRadius='90%' barSize={30} dataKey='value' data={data}>
            <RadialBar 
                label={{ position: 'center', fill:`${ theme === 'dark' ? '#d3d3d3' : 'black' }`}}
                background
                dataKey="value"
            />
            <Legend iconType="circle" iconSize={10} verticalAlign="bottom" align="center"/>
            </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}