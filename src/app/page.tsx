import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Siderbar";

export default function Home() {
  return (
    <main>
        <div className="flex">
          <Sidebar/>
          <Header/>
        </div>
    </main>
  );
}
