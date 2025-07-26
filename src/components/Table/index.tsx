import { League } from "@/interfaces";
import Image from "next/image";

interface Props {
  league: League;
}

export default function Table({ league }: Props) {
  const entries = league.children[0]?.standings?.entries;

  return (
    <div
      className={`overflow-y-auto m-4 scrollbar-thumb-gray-900 scrollbar-track-gray-100 scrollbar-thin`}
    >
      <table className="table table-xs sm:table-sm md:table-md lg:table-lg table-pin-rows table-pin-cols">
        <thead>
          <tr className="text-center">
            <th className="hidden sm:block sm:w-300 text-left">
              {league.name}
            </th>
            <th className="sm:hidden sm:w-300 text-left">
              {league.abbreviation}
            </th>
            <td>P</td>
            <td>GP</td>
            <td>W</td>
            <td>D</td>
            <td>L</td>
            <td>F</td>
            <td>A</td>
            <td>D</td>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            const statsMap = entry.stats.reduce(
              (acc, cur) => acc.set(cur.name, cur),
              new Map()
            );

            return (
              <tr key={entry.team.id} className="text-center whitespace-nowrap">
                <th className="sm:w-table-column text-left">
                  <div className="flex">
                    <div className="w-25 pr-7">
                      {statsMap.get("rank").displayValue}
                    </div>
                    <div className="pr-4 w-35">
                      <Image
                        src={entry.team.logos[0]?.href}
                        alt={entry.team.displayName}
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="hidden sm:block">
                      {entry.team.displayName}
                    </div>
                    <div className="sm:hidden">{entry.team.abbreviation}</div>
                  </div>
                </th>
                <td className="font-bold">
                  {statsMap.get("points").displayValue}
                </td>
                <td>{statsMap.get("gamesPlayed").displayValue}</td>
                <td>{statsMap.get("wins").displayValue}</td>
                <td>{statsMap.get("ties").displayValue}</td>
                <td>{statsMap.get("losses").displayValue}</td>
                <td>{statsMap.get("pointsFor").displayValue}</td>
                <td>{statsMap.get("pointsAgainst").displayValue}</td>
                <td>{statsMap.get("pointDifferential").displayValue}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
