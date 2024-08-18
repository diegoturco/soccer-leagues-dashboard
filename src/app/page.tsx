import { BASE_URL } from "./api/config";

export default async function DashboardPage() {
  console.log(`BASE_URL: ${BASE_URL}`);
  const url = `${BASE_URL}/api/route`;

  const res = await fetch(url);
  console.log(res);
  // const data = await res.json();
  // console.log(data);
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 h-full xl:h-screen 2xl:h-screen">
      {/* <Table league={data[0]} />
      <Table league={data[1]} />
      <Table league={data[2]} />
      <Table league={data[3]} />
      <Table league={data[4]} />
      <Table league={data[5]} /> */}
    </div>
  );
}
