import { colorMetaTags } from "../components/common/create-metadata";

const Meta = () => {
	return (
		<>
			{colorMetaTags.map((tag) => (
				<meta key={tag} name={tag} content={"transparent"} />
			))}
		</>
	);
};

export default Meta;
