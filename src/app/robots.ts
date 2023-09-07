import type { MetadataRoute } from "next";

import { siteURL } from ".../lib/contants";

export default function Robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: "/",
		},
		sitemap: `${siteURL}/sitemap.xml`,
		host: siteURL,
	};
}
