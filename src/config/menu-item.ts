export interface NavigationItem {
	href: string;
	text: string;
}

export const navigationItems: NavigationItem[] = [
	{ href: "/", text: "Home" },
	{ href: "/blog", text: "Blog" },
	{ href: "/about", text: "About Me" },
];
