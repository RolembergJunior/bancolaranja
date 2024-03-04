import { FaRegBell } from "react-icons/fa";


export default function Header(){
    return(
        <div className="flex justify-between items-center bg-[#131417] rounded-xl shadow-xl w-[60%] h-[100px] p-4">
            <h1 className="text-white font-medium text-xl">Dashboard</h1>
            <div className="flex items-center gap-3">
                <p className="text-hite">DARKMODE</p>
                <div className="bg-white w-1 h-[30px]"/>
                <div className="relative flex">
                    <FaRegBell color="white" className="icon" size={25} />
                    <div className="absolute bg-red-600 text-center text-white bottom-4 left-3 font-medium h-[20px] w-[20px] rounded-[50%] ">2</div>
                </div>
                <div className="flex items-center gap-3">
                    <img 
                        src="./discordFoto.jpg"
                        alt="Foto de usuário"
                        width={50}
                        className="rounded-[100%] h-[45px]"
                    />
                    <h2>Rolemberg Junior</h2>
                    <select className="bg-[#15181F]" name="Options" id="options">

                    </select>
                </div>
            </div>
        </div>
    );
}