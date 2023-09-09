import typography from "@tailwindcss/typography";
import { scrollbarColor, scrollbarGutter, scrollbarWidth } from "tailwind-scrollbar-utilities";

/**
 * @template {import('tailwindcss').Config} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('tailwindcss').Config}}
 */
function defineTailwindConfig(config) {
	return config;
}

module.exports = defineTailwindConfig({
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	darkMode: ["class", '[class="dark"]'],
	important: true,
	theme: {
		borderRadius: {
			"2xl": "18px",
			"3xl": "27px",
			DEFAULT: "4.5px",
			full: "9999px",
			lg: "9px",
			md: "6.75px",
			none: "0px",
			sm: "2.25px",
			xl: "13.5px",
		},
		fontSize: {
			"2xl": "27px",
			"3xl": "33.75px",
			"4xl": "40.5px",
			"5xl": "54px",
			"6xl": "67.5px",
			"7xl": "81px",
			"8xl": "148px",
			"9xl": "144px",

			base: "18px",
			lg: "20.25px",
			sm: "15.75px",
			xl: "22.5px",
			xs: "13.5px",
		},
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			colors: {
				gray: {
					50: "#f6f6f6",
					100: "#e7e7e7",
					200: "#d1d1d1",
					300: "#b0b0b0",
					400: "#888888",
					500: "#6d6d6d",
					600: "#5d5d5d",
					700: "#4f4f4f",
					800: "#454545",
					900: "#3d3d3d",
					950: "#0a0a0b",
				},
				warriors: {
					100: "#f9b039",
					200: "#ed2d33",
					300: "#011fa9",
				},
			},
		},
	},
	future: {
		hoverOnlyWhenSupported: true,
	},
	plugins: [typography, scrollbarGutter(), scrollbarWidth(), scrollbarColor()],
});
