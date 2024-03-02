import { GoBell } from "react-icons/go";


export default function Header(){
    return(
        <div className="bg-[#131417] rounded-xl shadow-xl w-[60%] h-[100px]">
            <h1 className="text-white font-medium text-xl">Dashboard</h1>
            <div className="flex">
                <p className="text-hite">DARKMODE</p>
                <div>
                    <GoBell color="white" width='50px'/>
                    <div className="bg-red-600 text-center text-white font-medium w-[28px] rounded-[50%] ">2</div>
                </div>
                <div className="bg-white w-1 h-[30px]"/>
            </div>
        </div>
    );
}