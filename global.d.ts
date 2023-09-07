declare global {
	namespace NodeJS {
		interface ProcessEnv {
			readonly NEXT_PUBLIC_SITE_URL: `https://${string}`;
			readonly NEXT_PUBLIC_VERCEL_URL: `https://${string}`;
			readonly NEXT_PUBLIC_GITPOD_URL: `https://${string}`;

			readonly NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: string;
			readonly NEXT_PUBLIC_YANDEX_SITE_VERIFICATION: string;
		}
	}

	interface Window {}

	var hello: (name: string) => string;

	type ComponentProps<P = {}> = PropsWithChildren<
		{
			className?: string;
		} & P
	>;
	type Component<P = {}> = FC<ComponentProps<P>>;
	type LayoutProps<P = {}> = PropsWithChildren<P>;
	type LayoutComponent<P = {}> = FC<LayoutProps<P>>;
}
export {};
