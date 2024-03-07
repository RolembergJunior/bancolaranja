'use client'

import {  RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";


export default function PieChart(){
    
    const data = [
        {
            name: '18-24',
            uv: 31.47,
            pv: 2400,
            fill: '#8884d8',
          }
    ]

    return(
        <div className="bg-[#131417] rounded-xl shadow-xl w-[40%] h-[400px] space-y-5 p-4">
            <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
            <RadialBar
                label={{ position: 'insideStart', fill: '#fff' }}
                background
                dataKey="uv"
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
            </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}