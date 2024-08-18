import type { League } from "@/interfaces";
import { NextResponse } from "next/server";

interface LeagueProps {
  code: string;
  season: number;
}

async function fetchLeagueByCode({
  code,
  season,
}: LeagueProps): Promise<League> {
  const res = await fetch(
    `${process.env.SOCCER_BASE_URL}/${code}/standings?season=${season}`,
    { next: { revalidate: 5 } }
  );
  return res.json();
}

export async function POST() {
  const leagueCodes = ["eng.1", "esp.1", "ita.1", "ger.1", "fra.1"];
  const europeanSeason = new Date().getFullYear() - 1;
  const promises = leagueCodes.map((code) =>
    fetchLeagueByCode({ code, season: europeanSeason })
  );

  const brazilSeason = new Date().getFullYear();
  promises.push(fetchLeagueByCode({ code: "bra.1", season: brazilSeason }));

  const res = await Promise.all(promises);
  return NextResponse.json(res);
}
