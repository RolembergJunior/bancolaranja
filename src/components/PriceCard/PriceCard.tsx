import { HiArrowTrendingDown, HiArrowTrendingUp } from "react-icons/hi2";

interface PriceProps{
    title: string,
    price: number,
    percent: number
}

export default function PriceCard({ title, price, percent }:PriceProps){
    return(
        <div className="bg-[#131417] w-[350px] h-[130px] rounded-xl shadow-xl space-y-5 p-5">
            <h1 className="text-white font-medium text-2xl">
                {title}
            </h1>
            <div className="flex justify-between">
                <p className="text-white text-2xl">R$ {price}MIL</p>
                <div className="relative flex items-center justify-around w-[80px] h-[30px]">
                    { percent > 0 ? <HiArrowTrendingUp color="#0BB07B" size={20} className="z-10"/> : <HiArrowTrendingDown color="#FF2D2D" size={20} className="z-10"/> }
                    <p className={`${ percent > 0 ? 'text-[#0BB07B]' : 'text-[#FF2D2D]' } z-10`}>{percent}%</p>
                    <div className={`absolute inset-0 ${ percent > 0 ? 'bg-[#0BB07B]' : 'bg-[#FF2D2D]' }  opacity-5 w-[80px] h-[30px] rounded-xl`}/>
                </div>
            </div>
        </div>
    );
}