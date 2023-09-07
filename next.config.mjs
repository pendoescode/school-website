import withBundleAnalyzer from "@next/bundle-analyzer";
import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
import million from "million/compiler";

console.log("HELLOOOOOOOOOOOOOOO");

dotenvExpand.expand(dotenv.config());

const withMillion = (options = {}) => {
	return (config) => million.next(config, options);
};

/**
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
	return config;
}

const config = defineNextConfig({
	reactStrictMode: true,
	cleanDistDir: true,
	swcMinify: true,
	compress: true,
	experimental: {
		newNextLinkBehavior: true,
		legacyBrowsers: false,
		typedRoutes: true,
		serverActions: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
			},
		],
		dangerouslyAllowSVG: true,
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox; style-src 'unsafe-inline';",
	},
	webpack: (config) => {
		return config;
	},
});

export default function (_phase, { defaultConfig: _ }) {
	const plugins = [
		(nextConfig) =>
			million.next(nextConfig, {
				auto: true,
			}),
		withBundleAnalyzer({ enabled: process.env.ANALYZE === "true" }),
	];
	return plugins.reduce((acc, plugin) => plugin(acc), { ...config });
}
