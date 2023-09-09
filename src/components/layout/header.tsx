import Link from "next/link";
import { usePathname } from "next/navigation";

import { useWindowSize } from ".../hooks/use-window-size";
import logo from ".../static/img/650x650.png";
import { navigationItems } from "../../config/menu-item";
import { Image } from "../core/image";

const Navigation = () => {
	const pathname = usePathname();
	const windowSize = useWindowSize();

	return (
		<nav className="flex h-[200px] w-screen items-center border-y border-zinc-700 bg-[#10155f]  text-zinc-200 ">
			<div className="sr-only absolute left-0 top-0 z-[30] flex h-screen w-[320px] items-center">
				<div className="flex flex-col space-x-4">
					{navigationItems.map((item) => {
						const isActive = pathname === item.href;
						return (
							<Link
								href={item.href as any}
								key={item.text}
								className={`${
									isActive
										? "bg-gray-900 text-white"
										: "text-gray-300 hover:bg-gray-700 hover:text-white"
								} rounded-md px-3 py-2 text-sm font-medium`}>
								{item.text}
							</Link>
						);
					})}
				</div>
			</div>
			<div className="flex h-full w-full flex-col items-center">
				<div className="flex w-full grow justify-between border-b border-zinc-400  px-7 lg:pr-7">
					<div className="flex h-full grow items-center justify-start gap-2">
						<Link href={"/"}>
							<Image src={logo.src} alt="Logo" width={48} height={48} />
						</Link>
						<div className="flex flex-col justify-between overflow-hidden">
							<h1 className="font-noto text-2xl leading-tight text-zinc-50">GOLDENSTATE COLLEGE</h1>
							<span className="text-xs">General Santos and Koronadal</span>
						</div>
					</div>
					<div className="grid-col grid h-full grid-rows-2">
						<div className="flex flex-row items-center justify-end gap-8 text-[11px]">
							<Link href={"/"}>eLibrary</Link>
							<Link href={"/"}>Call us (083)552-5544</Link>
							<Link href={"mailto:info@goldenstate.edu.ph"}>info@goldenstate.edu.ph</Link>
						</div>
						<div className="flex flex-row items-center justify-end gap-9 text-sm">
							<Link href={"/"}>Alumni</Link>
							<Link href={"/"}>Inquiry</Link>
							<Link href={"/"}>Courses</Link>
						</div>
					</div>
				</div>
				<div className="flex h-[92px] w-full flex-row justify-end gap-4 bg-[#fff] px-7 font-semibold lg:pr-7">
					<div className="text-md flex flex-row items-center justify-between gap-4 lg:w-3/5">
						{navigationItems.map((item) => {
							const isActive = pathname === item.href;
							return (
								<Link
									href={item.href as any}
									key={item.text}
									className={`${
										isActive ? "text-zinc-950" : "text-zinc-800"
									} rounded-md px-7 py-2 text-sm font-medium`}>
									{item.text}
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
