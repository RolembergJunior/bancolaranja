'use client'

import {AreaChart, Area, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer}  from "recharts";

export default function LineGraph(){
    const dataGraph =[
        { name: 'Feb', uv: 20000, pv: 2400, amt: 2400 },
        { name: 'Mar', uv: 30000, pv: 2400, amt: 2400 },
        { name: 'Abr', uv: 25000, pv: 2400, amt: 2400 },
        { name: 'Mai', uv: 28000, pv: 2400, amt: 2400 },
        { name: 'Jun', uv: 25000, pv: 2400, amt: 2400 },
        { name: 'Jul', uv: 35000, pv: 2400, amt: 2400 },
    ];

    return (
        <div className="-col-span-2 -row-span-3  bg-[#131417] rounded-xl shadow-xl w-[55%] h-[400px] space-y-5 p-5">
            <div className="flex items-center justify-between">
                <h1 className="text-white text-xl font-medium px-3">Transações</h1>
                <p className="text-[#FD7C39] text-2xl font-normal px-3">42.43M</p>
            </div>
            <ResponsiveContainer width="100%" height="80%">
                <AreaChart
                    width={600}
                    height={700}
                    data={dataGraph}
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis dataKey="uv"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
      );
    }