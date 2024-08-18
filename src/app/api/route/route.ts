// import type { League } from "@/interfaces";

// interface LeagueProps {
//   code: string;
//   season: number;
// }

// async function fetchLeagueByCode({
//   code,
//   season,
// }: LeagueProps): Promise<League> {
//   console.log(`SOCCER_BASE_URL: ${process.env.SOCCER_BASE_URL}`);

//   const res = await fetch(
//     `${process.env.SOCCER_BASE_URL}/${code}/standings?season=${season}`,
//     { next: { revalidate: 5 } }
//   );
//   return res.json();
// }

// export async function GET() {
//   const leagueCodes = ["eng.1", "esp.1", "ita.1", "ger.1", "fra.1"];
//   const europeanSeason = new Date().getFullYear() - 1;
//   const promises = leagueCodes.map((code) =>
//     fetchLeagueByCode({ code, season: europeanSeason })
//   );

//   const brazilSeason = new Date().getFullYear();
//   promises.push(fetchLeagueByCode({ code: "bra.1", season: brazilSeason }));

//   const res = await Promise.all(promises);
//   return Response.json(res);
// }

export async function GET() {
  return new Response(JSON.stringify({ message: 'hello' }), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
