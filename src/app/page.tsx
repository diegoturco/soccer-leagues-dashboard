import { League } from "@/interfaces";
import Table from "../components/Table";

interface LeagueProps {
  code: string;
  season: number;
}

async function fetchLeagueByCode({
  code,
  season,
}: LeagueProps): Promise<League> {
  const res = await fetch(
    `https://site.web.api.espn.com/apis/v2/sports/soccer/${code}/standings?season=${season}`,
    { next: { revalidate: 5 } }
  );
  
  return res.json();
}

export default async function DashboardPage() {
  const leagueCodes = ["eng.1", "esp.1", "ita.1", "ger.1", "fra.1"];
  const europeanSeason = new Date().getFullYear() - 1;
  const promises = leagueCodes.map((code) =>
    fetchLeagueByCode({ code, season: europeanSeason })
  );

  const brazilSeason = new Date().getFullYear();
  promises.push(fetchLeagueByCode({ code: "bra.1", season: brazilSeason }));

  const res = await Promise.all(promises);

  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 2xl:grid-cols-3 h-full xl:h-screen 2xl:h-screen">
      <Table league={res[0]} />
      <Table league={res[1]} />
      <Table league={res[2]} />
      <Table league={res[3]} />
      <Table league={res[4]} />
      <Table league={res[5]} />
    </div>
  );
}
