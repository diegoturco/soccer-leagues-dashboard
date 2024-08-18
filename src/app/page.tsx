import Table from "@/components/Table";
import { headers } from "next/headers";
import { getBaseUrl } from "./api/config";

export default async function DashboardPage() {
  const url = `${getBaseUrl({ headers })}/api/route`;

  console.log(url);

  const res = await fetch(url, {
    method: "POST",
  });

  const data = await res.json();

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
