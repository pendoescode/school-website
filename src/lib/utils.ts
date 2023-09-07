import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...classnames: ClassValue[]): string => {
	return twMerge(clsx(classnames));
};

export const formatError = (error: unknown): { message: string; name?: string } => {
	try {
		if (error instanceof Error) {
			return { message: error.message, name: error.name };
		}
		return { message: String(error) };
	} catch (error) {
		return { message: "An unknown error ocurred." };
	}
};

export function formatDate(input: string): string {
	const [day, month, year] = input.split("-");
	const months: string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	const monthIndex = parseInt(month, 10) - 1;
	return `${months[monthIndex]} ${parseInt(day, 10)}, ${year}`;
}
