import { createMetadata } from "../components/common/create-metadata";
import View from "../views/home";

export const generateMetadata = createMetadata({ title: "Home" });
export default function Page() {
	return (
		<>
			<View />
		</>
	);
}
