import { ImageResponse, NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

const size = {
	width: 1512,
	height: 900,
};
export const GET = async (request: NextRequest, _response: NextResponse) => {
	const title = request.nextUrl.searchParams.get("title") ?? "";

	const titleFontSize = title.length > 50 ? "text-4xl" : title.length > 40 ? "text-5xl" : "text-7xl";
	return new ImageResponse(
		(
			<div
				style={{
					...size,
					padding: "6rem 4rem",
					backgroundColor: "white",
					display: "flex",
					flexDirection: "column",
					justifyContent: "space-between",
				}}>
				<header style={{ display: "flex", flexDirection: "column-reverse" }}>
					<h1
						style={{
							margin: 0,
							marginTop: 6,
							fontFamily: "inter-bold",
							fontWeight: "bold",
							maxWidth: 1234,
							color: "black",
						}}
						tw={`${titleFontSize}`}>
						{title}
					</h1>
					<h2
						style={{
							margin: 0,
							fontSize: 36,
							fontFamily: "poppins-medium",
							color: "grey",
						}}>
						Take a look at this article
					</h2>
				</header>
				<footer style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<h3
							style={{
								margin: 0,
								color: "black",
								fontSize: 48,
								fontFamily: "poppins-bold",
							}}>
							Casper Iversen
						</h3>
						<h4
							style={{
								margin: 0,
								color: "black",
								fontSize: 40,
								fontFamily: "poppins-medium",
							}}>
							Web Developer
						</h4>
					</div>
					<h4 style={{ fontSize: 40, margin: 0, color: "black" }}>
						casperiv<span style={{ color: "red" }}>.dev</span>
					</h4>
				</footer>
			</div>
		),
		size,
	);
};
