import Header from "@/components/Header/Header";
import LineGraph from "@/components/LineGraph/LineGraph";
import Sidebar from "@/components/Sidebar/Siderbar";

export default function Home() {
  return (
    <main>
        <div className="flex">
          <Sidebar/>
          <Header/>
          <LineGraph/>
        </div>
    </main>
  );
}
