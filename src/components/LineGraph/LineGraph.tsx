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
                    height={800}
                    data={dataGraph}
                    margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                    }}
                    
                >
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#FD7C39" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#FD7C39" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="name"/>
                    <YAxis type="number" tickSize={15} dataKey="uv"/>
                    <Tooltip />
                    <Area type="monotone" dataKey="uv"  fill="url(#colorUv)" strokeWidth={3} stroke="#FD7C39"/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
      );
    }