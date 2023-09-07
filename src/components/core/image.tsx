import NextImage, { type ImageProps } from "next/image";

import { cn } from ".../lib/utils";

type BaseImageProps = Omit<ImageProps, "width" | "height">;
type SizeProps = BaseImageProps & { size?: number | string };
type WidthHeightProps = BaseImageProps & {
	width?: number | string;
	height?: number | string;
};

type ImgProps = SizeProps | WidthHeightProps;

export const Image = (props: ImgProps) => {
	const { size = 0, ...otherProps } = props as SizeProps;
	const { width = size, height = size, ...rest } = otherProps as WidthHeightProps;
	return (
		<NextImage
			{...rest}
			alt={rest.alt}
			width={Number(width)}
			height={Number(height)}
			loading={rest.priority ? undefined : rest.loading || "lazy"}
			decoding={"async"}
			className={cn("object-cover object-center", rest.className)}
		/>
	);
};
