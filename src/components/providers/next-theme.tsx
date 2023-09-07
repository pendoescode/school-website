"use client";

import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from "next-themes";
import { type PropsWithChildren, createContext, useEffect, useMemo } from "react";

import { colorMetaTags } from ".../components/common/create-metadata";

interface ThemeContextValue {
	isDark: boolean;
	toggleTheme?: () => void;
}

const defaultContextState: ThemeContextValue = {
	isDark: false,
};

const ThemeContext = createContext<ThemeContextValue>(defaultContextState);

export default function ThemeProvider(props: PropsWithChildren) {
	const { theme, resolvedTheme, setTheme } = useNextTheme();

	const actualTheme = useMemo(() => resolvedTheme || theme, [resolvedTheme, theme]);

	const themeContextValue: ThemeContextValue = {
		isDark: actualTheme === "dark",
		toggleTheme: () => {
			setTheme(actualTheme === "dark" ? "light" : "dark");
		},
	};

	useEffect(() => {
		colorMetaTags.forEach((tag) => {
			document.head
				.querySelector(`meta[name="${tag}"]`)
				?.setAttribute("content", actualTheme === "dark" ? "#080f1e" : "#ffffff");
		});
	}, [actualTheme]);

	return (
		<NextThemeProvider attribute={"class"} defaultTheme={"system"} enableSystem>
			<ThemeContext.Provider value={themeContextValue}>{props.children}</ThemeContext.Provider>
		</NextThemeProvider>
	);
}
