'use client'

import Header from "@/components/Header/Header";
import LineGraph from "@/components/LineGraph/LineGraph";
import PieChart from "@/components/PieChart/PieChart";
import PriceCard from "@/components/PriceCard/PriceCard";
import Sidebar from "@/components/Sidebar/Siderbar";
import TransactionsCard from "@/components/TransactionsCard/TransactionsCard";

export default function Home() {

  const dataValues = [
    {
      name: "Receita aual",
      price: 300.1,
      percent: 5.1
    },
    {
      name: "Rendimento",
      price: 20.4,
      percent: -1.2
    },
    {
      name: "Transação realizadas",
      price: 5,
      percent: 11
    }
  ];

  const dataTransactions = [
    { n: 1, image: './discordFoto.jpg', nome: 'Rolemberg Junior', valor: 2500, data: '13/05/2003', tipo: 'pix' },
    { n: 2, image: './discordFoto.jpg', nome: 'Italo Dutra', valor: 5500, data: '23/10/2013', tipo: 'ted' },
    { n: 3, image: './discordFoto.jpg', nome: 'Ruan Pablo', valor: 7500, data: '09/06/2023', tipo: 'ted' },
    { n: 4, image: './discordFoto.jpg', nome: 'Luan Carlos', valor: 8500, data: '03/02/2024', tipo: 'pix' }
  ];

  return (
    <main className="bg-[#F6F6FB] dark:bg-[#15181F]">
        <div className="flex gap-10 w-[80%] mx-auto mt-10">
          <Sidebar/>
          <div className="flex flex-wrap w-[80%] gap-10">
            <Header/>
            <div className="flex justify-between w-full">
              <LineGraph/>
              <PieChart/>
            </div>
            <div className="flex justify-between w-full"> 
              {dataValues.map( card => (
                <PriceCard title={card.name} price={card.price} percent={card.percent}/>
              ))}
            </div>
            <TransactionsCard data={dataTransactions} />
          </div>
        </div>
    </main>
  );
}
