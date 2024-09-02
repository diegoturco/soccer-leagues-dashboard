import type { League } from "@/interfaces";
import getCurrentEuropeanSeasonYear from "@/utils/getCurrentEuropeanSeasonYear";

interface LeagueByCodeProps {
  code: string;
  season: number;
}

interface LeagueProps {
  eng: League;
  esp: League;
  ita: League;
  ger: League;
  fra: League;
  bra: League;
}

async function fetchLeagueByCode({
  code,
  season,
}: LeagueByCodeProps): Promise<League> {
  const res = await fetch(
    `${process.env.SOCCER_BASE_URL}/${code}/standings?season=${season}`,
    { next: { revalidate: 5 } }
  );
  return res.json();
}

async function getAllLeagues(): Promise<LeagueProps> {
  const leagueCodes = ["eng.1", "esp.1", "ita.1", "ger.1", "fra.1"];
  const europeanSeason = getCurrentEuropeanSeasonYear();
  const promises = leagueCodes.map((code) =>
    fetchLeagueByCode({ code, season: europeanSeason })
  );

  const brazilianSeason = new Date().getFullYear();
  promises.push(fetchLeagueByCode({ code: "bra.1", season: brazilianSeason }));

  const res = await Promise.all(promises);
  return {
    eng: res[0],
    esp: res[1],
    ita: res[2],
    ger: res[3],
    fra: res[4],
    bra: res[5],
  };
}

export default getAllLeagues;
