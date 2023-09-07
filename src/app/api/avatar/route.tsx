import { ImageResponse, NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const width = 500;
const height = width;

function renderFavicon(url: string) {
	return new ImageResponse(
		(
			// eslint-disable-next-line @next/next/no-img-element
			<img src={url} alt={`${url}`} width={width} height={height} />
		),
		{
			width,
			height,
		},
	);
}

export const GET = async (request: NextRequest, _response: NextResponse) => {
	const urlImg = request.nextUrl.searchParams.get("url") ?? "https://github.com/cilthepen.png";
	try {
		const { url } = await fetch(urlImg);
		return renderFavicon(url);
	} catch (error) {
		return new NextResponse(JSON.stringify({ message: "Invalid URL" }), {
			status: 500,
			statusText: "Internal Error",
			headers: {
				"Content-Type": "application/json",
			},
		});
	}
};
