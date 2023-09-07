import { NextResponse } from "next/server";

const middleware = async () => {
	const ContentSecurityPolicy = `
	default-src 'self' vercel.live;
	worker-src 'self' blob:;
	script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com va.vercel-scripts.com vercel.live;
	child-src *.google.com *.unsplash.com *.scdn.co *.spotify.com *.jahir.dev unavatar.now.sh *.unavatar.io cdn.discordapp.com *.cdninstagram.com;
	style-src 'self' 'unsafe-inline' *.googleapis.com;
	img-src *.cdninstagram.com *.gstatic.com * blob: data:;
	object-src 'none';
	base-uri 'none';
	media-src 'self' *.cdninstagram.com;
	connect-src *;
	font-src 'self' *.gstatic.com data:;
	`;

	const response = NextResponse.next();

	response.headers.set("Content-Security-Policy", ContentSecurityPolicy.trim().replace(/\n/g, ""));
	response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
	response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
	response.headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains; preload");
	response.headers.set("X-Frame-Options", "DENY");
	response.headers.set("X-Content-Type-Options", "nosniff");
	response.headers.set("X-DNS-Prefetch-Control", "on");

	return response;
};

export default middleware;
