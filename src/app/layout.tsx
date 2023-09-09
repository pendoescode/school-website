"use client";

import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import { Provider as BalancerProvider } from "react-wrap-balancer";

import Layout from ".../components/layout";
import { cn } from ".../lib/utils";
import ".../styles/index.css";
import ScrollToTop from "../components/common/scroll-to-top";
import ScrollUp from "../components/common/scroll-up";
import Meta from "./meta";

const ThemeProvider = dynamic(() => import("../components/providers/next-theme"), { ssr: false });

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<head>
				<Meta />
			</head>
			<body
				className={cn(
					"bg-zinc-50",
					"text-zinc-800",
					"flex flex-col",
					"min-h-screen subpixel-antialiased",
					"scroll-smooth",
					"scrollbar-gutter-stable scrollbar-gutter-both-edges",
					"m-0 p-0",
				)}>
				<ScrollUp />
				<ThemeProvider>
					<BalancerProvider>
						<Layout>{children}</Layout>
					</BalancerProvider>
				</ThemeProvider>
				<ScrollToTop />
				<Analytics />
			</body>
		</html>
	);
}
