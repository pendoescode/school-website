/* eslint-disable @next/next/no-img-element */
"use client";

const ErrorComponent = (props: { error: Error }) => {
	const { error } = props;
	return (
		<section id={"error"} className={"h-full w-full"}>
			{error ? (
				<details className={"rounded-8 border-divider border"}>
					<summary className={"select-none p-8"}>Error logs</summary>
					<div
						data-rehype-pretty-code-fragment
						className={"border-divider max-w-full break-words border-t p-12"}>
						<pre data-language={"json"} className={"overflow-x-auto"}>
							<code
								data-language={"json"}
								className={"text-3xs max-w-full whitespace-pre-line font-mono"}>
								{JSON.stringify(
									{
										...error,
										message: error.message,
										name: error.name,
										cause: error.cause,
										stack: error.stack,
									},
									null,
									2,
								)}
							</code>
						</pre>
					</div>
				</details>
			) : null}
		</section>
	);
};

export default ErrorComponent;
