"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from ".../config/menu-item";
import { useWindowSize } from ".../hooks/use-window-size";
import ThemeToggle from "../common/theme-toggle";

const Header = () => {
	const { innerWidth } = useWindowSize();

	return (
		<ul className="grid w-full grid-cols-3 items-center justify-between">
			<li className="item-center order-2 flex w-full justify-center lg:order-1 lg:w-auto lg:justify-start">
				<Link href="/">
					<span className="text-2xl">Logo</span>
				</Link>
			</li>
			<li className="fllex relative order-1 h-full w-max items-center rounded-[4px] bg-transparent p-2.5 text-gray-900 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-[4px] before:bg-gray-50/75 before:backdrop-blur-sm dark:text-gray-200 dark:hover:text-gray-100 sm:p-3.5 lg:order-2 lg:hidden lg:bg-gray-100 lg:bg-opacity-60 lg:p-0">
				<ul className="flex h-full items-center">
					<li className="lg:hidden">
						<button className="mt-0.5 flex flex-col gap-1.5 py-1.5">
							<Menu />
						</button>
					</li>
				</ul>
				{/* <DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="outline" aria-label="Menu">
								<Menu />
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent className="w-auto">
							{navigationItems.map((item, index) => {
								const pathname = usePathname();
								const isActive = pathname === item.href;
								return (
									<Link href={item.href as any} passHref>
										<DropdownMenuItem className="flex items-center gap-2">
											<span>{item.text}</span>
										</DropdownMenuItem>
									</Link>
								);
							})}
						</DropdownMenuContent>
					</DropdownMenu> */}
			</li>
			<li className="relative order-1 hidden w-max items-center gap-5 place-self-center rounded px-5 py-2.5 before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:rounded-[4px] before:backdrop-blur lg:flex lg:bg-gray-600 lg:bg-opacity-[0.35]">
				{navigationItems.map((item, index) => {
					const pathname = usePathname();
					const isActive = pathname === item.href;
					return (
						<Link
							href={item.href as any}
							className="flex items-center gap-2 dark:text-gray-200 dark:hover:text-gray-100 "
							passHref>
							{isActive ? <span>{item.text}</span> : <span>{item.text}</span>}
						</Link>
					);
				})}
			</li>
			<li className="order-3 shrink-0 justify-self-end lg:flex">
				{/* <span className="font-mono text-xs text-gray-500">{new Date().getFullYear()}</span> */}
				<ThemeToggle />
			</li>
		</ul>
	);
};
export default Header;
