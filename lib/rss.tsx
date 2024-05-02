import { generateRssFeed } from "@/lib/feed";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const xml = await generateRssFeed();
  res.statusCode = 200;
  res.setHeader("Cache-Control", "s-maxage=86400, stale-while-revalidate");
  res.setHeader("Content-Type", "text/xml");
  res.end(xml);
}
