import { cn } from ".../lib/utils";

const base = cn("bg-neutral-100 text-black dark:bg-neutral-800 dark:text-white ");

export default function TailwindIndicator() {
	if (process.env.NODE_ENV === "production") return null;

	return (
		<div
			className={cn(
				base,
				"fixed bottom-1 left-1 z-50 flex h-6 w-6 items-center justify-center rounded-full p-3 font-mono",
			)}>
			<div className="block sm:hidden">xs</div>
			<div className="hidden sm:block md:hidden">sm</div>
			<div className="hidden md:block lg:hidden">md</div>
			<div className="hidden lg:block xl:hidden">lg</div>
			<div className="2xl:hidden hidden xl:block">xl</div>
			<div className="2xl:block hidden">2xl</div>
		</div>
	);
}
