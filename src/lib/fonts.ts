import { JetBrains_Mono, Noto_Serif, PT_Serif } from "next/font/google";

export const fontMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const fontNoto = Noto_Serif({
	subsets: ["latin"],
	variable: "--font-noto",
});
export const fontPT = PT_Serif({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-pt",
});
