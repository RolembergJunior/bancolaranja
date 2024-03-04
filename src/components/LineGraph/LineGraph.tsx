import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

export default function LineGraph(){
    const dataGraph =[
        { name: 'Feb', uv: 20000, pv: 2400, amt: 2400 },
        { name: 'Mar', uv: 30000, pv: 2400, amt: 2400 },
        { name: 'Abr', uv: 25000, pv: 2400, amt: 2400 },
        { name: 'Mai', uv: 28000, pv: 2400, amt: 2400 },
        { name: 'Jun', uv: 25000, pv: 2400, amt: 2400 },
        { name: 'Jul', uv: 35000, pv: 2400, amt: 2400 },
    ]

    return(
        <div className="bg-[#131417] w-[500px] h-[400px] rounded-xl shadow-xl">
            <h1>Total transações</h1>
            <LineChart width={600} height={300} data={dataGraph} margin={{ top:5, right: 20, bottom: 5, left: 0 }}>
                <Line type='monotone' dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip label="Valor"/>
            </LineChart>
        </div>
    );
}