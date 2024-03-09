'use client'

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { FaMoon, FaRegBell } from "react-icons/fa";
import { MdLightMode } from "react-icons/md";


export default function Header(){
    const { theme, setTheme } = useTheme();

    console.log(theme )

    return(
        <div className="flex justify-between items-center dark:bg-[#131417] bg-white rounded-xl shadow-xl w-[100%] h-[100px] p-4">
            <h1 className="text-black dark:text-white font-medium text-xl">Dashboard</h1>
            <div className="flex items-center gap-7">
            <button onClick={() => setTheme( theme === 'dark' ? 'light' : 'dark')} className="flex items-center bg-[#F6F6F6] dark:bg-[#15181F] rounded-3xl gap-2 px-4 py-2 cursor-pointer">
                    {
                        theme === 'dark' ? (
                            <FaMoon color="white" />
                        ) :
                        (
                            <MdLightMode className="" color="#E3A265" />
                        )
                    }
            </button>
                    
                <div className="bg-black dark:bg-white w-[2px] h-[30px]"/>
                <div className="relative flex">
                    <FaRegBell className="icon text-black dark:text-white" size={25} />
                    <div className="absolute bg-red-600 text-center text-white bottom-4 left-3 font-medium h-[20px] w-[20px] rounded-[50%] ">2</div>
                </div>
                <div className="flex items-center gap-3">
                    <img 
                        src="./discordFoto.jpg"
                        alt="Foto de usuário"
                        width={50}
                        className="rounded-[100%] h-[45px]"
                    />
                    <h2 className="text-black dark:text-white font-medium">Rolemberg Junior</h2>
                    <select className="bg-[#F6F6FB] dark:bg-[#15181F]" name="Options" id="options">

                    </select>
                </div>
            </div>
        </div>
    );
}