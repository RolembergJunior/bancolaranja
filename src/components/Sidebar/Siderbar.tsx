import { FaBookmark, FaUserAlt } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { IoDocumentTextOutline, IoExitOutline, IoHomeSharp } from "react-icons/io5";


export default function Sidebar(){
    return(
       <>
            <div className="flex flex-col justify-between bg-[#131417] w-[250px] h-[100vh] py-6 rounded-xl shadow-xl">
                <div>
                    <img 
                        src="./logo.png" 
                        alt="Logo do banco" 
                        className="mx-auto mb-16"
                    />
                    <ul className="flex flex-col space-y-5 w-full">
                        <div className="relative flex items-center w-full h-[55px] border-r-4 border-r-[#FD7C39] p-3 gap-3 cursor-pointer">
                            <IoHomeSharp className="text-[#FD7C39]"/>
                            <li className="text-[#FD7C39] text-lg font-medium">Description</li>
                            <div className="absolute bg-[#FD7C39] inset-0 opacity-10 " />
                        </div>
                        <div className="flex items-center px-3 gap-3 cursor-pointer">
                            <FaFireFlameCurved className="text-white"/>
                            <li className="text-white text-lg font-medium ">Investimentos</li>
                        </div>
                        <div className="flex items-center px-3 gap-3 cursor-pointer">
                            <FaUserAlt className="text-white"/>
                            <li className="text-white text-lg font-medium ">Meus competidores</li>
                        </div>
                        <div className="flex items-center px-3 gap-3 cursor-pointer">
                            <IoDocumentTextOutline className="text-white"/>
                            <li className="text-white text-lg font-medium ">Documentos</li>
                        </div>
                        <div className="flex items-center px-3 gap-3 cursor-pointer">
                            <FaBookmark className="text-white"/>
                            <li className="text-white text-lg font-medium ">Salvos</li>
                        </div>
                    </ul>
                </div>
                <div className="flex items-center px-3 gap-3 cursor-pointer">
                    <IoExitOutline className="text-[#FF3333]"/>
                    <a className="text-[#FF3333] text-lg">Sair da conta</a>
                </div>
                
            </div>
       </> 
    );
}