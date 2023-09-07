import Link from "next/link";

import { createMetadata } from ".../components/common/create-metadata";

export const generateMetadata = createMetadata({ title: "404" });

export default function Page() {
	return (
		<div className="mb-40 mt-52 flex flex-col items-center justify-center gap-12">
			<h1 className="text-center text-6xl font-bold">404 Not Found</h1>
			<Link
				href="/"
				className="border-accent-2 hover:bg-accent-2 rounded-lg border px-3 py-2 transition-colors duration-150"
				passHref>
				Go homepage
			</Link>
		</div>
	);
}
