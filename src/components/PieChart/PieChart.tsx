'use client'

import {  Legend, RadialBar, RadialBarChart, ResponsiveContainer } from "recharts";


export default function PieChart(){
    
    const data = [
        {
            name: 'Investido',
            uv: [200, 75], 
            pv:100,
            fill: '#FD7C39',
        }
          
    ]

    return(
        <div className="bg-[#131417] rounded-xl shadow-xl w-[40%] h-[400px] space-y-5 p-7">
            <h1 className="text-white text-2xl font-medium ">Meta de Investimento</h1>
            <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart cx="50%" cy="44%" innerRadius="80%" barSize={35} dataKey='pv' width={90} data={data}>
            <RadialBar 
                dominantBaseline={150}
                label={{ position: 'center', fill: '#fff' }}
                background
                dataKey="uv"
                data={data}
                startAngle={0}
                endAngle={180}
            />
            <Legend iconSize={10} layout="vertical" verticalAlign="bottom" />
            </RadialBarChart>
            </ResponsiveContainer>
        </div>
    );
}