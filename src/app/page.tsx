import Table from "@/components/Table";
import { headers } from "next/headers";
import { getBaseUrl } from "./api/config";

async function fetchAllLeagues() {
  const url = `${getBaseUrl({ headers })}/api/route`;

  const res = await fetch(url, {
    method: "POST",
    next: { revalidate: 5 },
  });

  return await res.json();
}

export default async function DashboardPage() {
  const data = await fetchAllLeagues();
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 h-full xl:h-screen 2xl:h-screen">
      <Table league={data[0]} />
      <Table league={data[1]} />
      <Table league={data[2]} />
      <Table league={data[3]} />
      <Table league={data[4]} />
      <Table league={data[5]} />
    </div>
  );
}
