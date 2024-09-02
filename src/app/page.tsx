import getAllLeagues from "@/services/getAllLeagues";
import Table from "../components/Table";

export default async function DashboardPage() {
  const { eng, esp, ita, ger, fra, bra } = await getAllLeagues();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 h-full xl:h-screen 2xl:h-screen">
      <Table league={eng} />
      <Table league={esp} />
      <Table league={ita} />
      <Table league={ger} />
      <Table league={fra} />
      <Table league={bra} />
    </div>
  );
}
