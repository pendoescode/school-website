import { ImageResponse, NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export const GET = async (request: NextRequest, _response: NextResponse) => {
	const title = request.nextUrl.searchParams.get("title") ?? "";

	return new ImageResponse(<></>, {
		width: 1920,
		height: 1080,
	});
};
