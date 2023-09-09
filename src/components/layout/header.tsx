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
		<nav className="flex h-[200px] w-screen items-center border-y border-zinc-700 bg-zinc-100 px-7 py-0 lg:pr-7">
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
				<div className="flex w-full grow justify-between border-b border-zinc-400">
					<div className="flex h-full items-center justify-center gap-2">
						<Link href={"/"}>
							<Image src={logo.src} alt="Logo" width={48} height={48} />
						</Link>
						<div className="flex h-[48px] flex-col overflow-hidden">
							<h1 className="font-noto text-xl leading-tight text-zinc-900">GOLDENSTATE COLLEGE</h1>
							<span>General Santos and Koronadal</span>
						</div>
					</div>
				</div>
				<div className="flex h-[64px] w-full flex-row items-center justify-start gap-4">
					<div className="flex grow flex-row items-center justify-evenly gap-4">
						<Link className="rounded border-b-4 px-7 py-4 hover:bg-yellow-300" href={"/"}>
							Home
						</Link>
						<Link className="rounded border-b-4 px-7 py-4 hover:border-yellow-300" href={"/"}>
							About Us
						</Link>
						<Link className="rounded border-b-4 px-7 py-4 hover:border-yellow-300" href={"/"}>
							Academics
						</Link>
						<Link className="rounded border-b-4 px-7 py-4 hover:border-yellow-300" href={"/"}>
							Admission
						</Link>
						<Link className="rounded border-b-4 px-7 py-4 hover:border-yellow-300" href={"/"}>
							Campus
						</Link>
						<Link className="rounded px-7 py-4" href={"/"}>
							News
						</Link>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
