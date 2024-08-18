import type { ReadonlyHeaders } from "next/dist/server/web/spec-extension/adapters/headers";

interface BaseUrlProps {
  headers: () => ReadonlyHeaders;
}

export const getBaseUrl = ({ headers }: BaseUrlProps) => {
  const host = headers().get("host");
  return process.env.VERCEL_URL ? `https://${host}` : `http://${host}`;
};
