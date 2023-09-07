export const isDev = process.env.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === "production";

export const isClient = typeof document !== "undefined";
export const isServer = !isClient;

export const siteURL = new URL(
	process.env.NEXT_PUBLIC_SITE_URL ??
		process.env.NEXT_PUBLIC_VERCEL_URL ??
		process.env.GITPOD_WORKSPACE_URL?.replace("https://", "https://3000-") ??
		"http://localhost",
).origin;
export const siteName = "Next App";
export const siteDescription = "A minimalist's boilerplate — Next.js with TypeScript.";
export const siteKeywords = "next, appdir, template, typescript";
