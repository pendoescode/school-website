import type { MetadataRoute } from "next";

import { siteURL } from ".../lib/contants";

export default function Sitemap() {
	const staticRoutes = [""].map((route) => ({
		url: `${siteURL}/${route}`,
		lastModified: new Date(),
	})) satisfies MetadataRoute.Sitemap;

	return [...staticRoutes];
}

export const runtime = "edge";
export const revalidate = 60;
