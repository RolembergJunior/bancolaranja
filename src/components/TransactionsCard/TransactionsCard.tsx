'use client'

interface TransactionsCardProps{
    data:
        {
            n:number,
            image: string,
            nome: string,
            valor: number,
            data: string,
            tipo: string
        }[]

}

export default function TransactionsCard({ data }:TransactionsCardProps){

    return(
        <div className="bg-[#131417] rounded-xl shadow-xl w-full h-auto space-y-5 pt-7 p-4">
            <h1 className="text-white text-xl font-medium">Últimas atualizações realizadas</h1>
            <table className=" w-full border-collapse">
                <thead>
                    <tr>
                            <th className="text-[#FFFFFF] text-start opacity-55 border- p-[8px]">
                                N
                            </th>
                            <th className="text-[#FFFFFF] text-center opacity-55 border- p-[8px]">
                                Image
                            </th>
                            <th className="text-[#FFFFFF] text-start opacity-55 border- p-[8px]">
                                Nome
                            </th>
                            <th className="text-[#FFFFFF] text-start opacity-55 border- p-[8px]">
                                Valor
                            </th>
                            <th className="text-[#FFFFFF] text-center opacity-55 border- p-[8px]">
                                Data
                            </th>
                            <th className="text-[#FFFFFF] text-end opacity-55 border- p-[8px]">
                                Tipo
                            </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr key={index}>
                                <td className="text-white border-b-2 border-t-2 border-[#F6F6FB] border-opacity-10 p-[8px]">
                                    {row.n}
                                </td>
                                <td className="text-white border-b-2 border-t-2 border-[#F6F6FB] border-opacity-10 p-[8px]">
                                    <img src={row.image} alt="Foto de usuário" width={50} className="rounded-[100%] h-[45px] mx-auto" />
                                </td>
                                <td className="text-white text-start border-b-2 border-t-2 border-[#F6F6FB] border-opacity-10 p-[8px]">
                                    {row.nome}
                                </td>
                                <td className="text-white border-b-2 border-t-2 border-[#F6F6FB] border-opacity-10 p-[8px]">
                                    R$ {row.valor},00
                                </td>
                                <td className="text-white text-center border-b-2 border-t-2 border-[#F6F6FB] border-opacity-10 p-[8px]">
                                    {row.data}
                                </td>
                                <td className={`border-b-2 border-t-2 border-[#F6F6FB] border-opacity-10 p-[8px]`}>
                                    <div className={`text-end ${ row.tipo === 'pix' ? 'text-[#00D2FF] border-2 border-[#00D2FF]' : 'text-[#8980FF] border-2 border-[#8980FF]'} rounded-xl w-12 `}>
                                        {row.tipo}
                                    </div>
                                </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}