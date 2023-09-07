import type { Metadata } from "next";

import { siteDescription, siteKeywords, siteName, siteURL } from ".../lib/contants";

interface MetadataProps {
	title?: string;
	description?: string;
	keywords?: string | Array<string> | null;
	imagePath?: string;
	pathName?: string;
}

export const colorMetaTags = [
	"theme-color",
	"msapplication-TileColor",
	"msapplication-navbutton-color",
	"apple-mobile-web-app-status-bar-style",
];

export function createMetadata({
	title = siteName,
	description = siteDescription,
	keywords = siteKeywords,
	imagePath,
	pathName,
}: MetadataProps) {
	return async function () {
		const metadata: Record<string, any> = {};
		metadata["x-ua-compatible"] = "ie=edge";
		metadata["metadataBase"] = new URL(siteURL);
		metadata["author"] = [{ name: "John Carlo Lapiz", url: "https://cilthepen.pages.app" }];
		metadata["keywords"] =
			keywords &&
			(Array.isArray(keywords) ? keywords : [keywords])
				.flatMap((keyword) => keyword.split(","))
				.filter((keyword) => keyword.length)
				.map((keyword) => keyword.trim().toLocaleLowerCase());
		metadata["robots"] = {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				"max-video-preview": -1,
				"max-image-preview": "large",
				"max-snippet": -1,
			},
		};
		metadata["openGraph"] = {};
		metadata["openGraph"]["locale"] = "en_US";
		metadata["openGraph"]["type"] = "website";
		metadata["openGraph"]["siteName"] = siteName;
		metadata["twitter"] = {};
		metadata["twitter"]["site"] = siteURL;

		if (title) {
			metadata["title"] = title !== siteName ? `${title} • ${siteName}` : siteName;
			metadata["openGraph"]["title"] = title;
			metadata["twitter"]["title"] = title;
		}

		if (description) {
			metadata["description"] = description;
			metadata["openGraph"]["description"] = description;
			metadata["twitter"]["description"] = description;
		}

		const imageURL = imagePath ? `${siteURL}/${imagePath}` : `${siteURL}/api/og?title=${title}`;
		metadata["openGraph"]["images"] = [imageURL];
		metadata["twitter"]["images"] = [imageURL];
		metadata["twitter"]["card"] = "summary_large_image";

		const url = pathName ? `${siteURL}/${pathName}` : `${siteURL}`;
		if (url) {
			metadata["alternates"] = {};
			metadata["alternates"]["canonical"] = url;
			metadata["openGraph"]["url"] = url;
		}

		metadata["verification"] = {};
		metadata["verification"]["google"] = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;
		metadata["verification"]["yandex"] = process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION;

		return metadata as Metadata;
	};
}
