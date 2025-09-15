
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	export interface AppTypes {
		RouteId(): "/" | "/about" | "/camilo" | "/sverdle" | "/sverdle/how-to-play" | "/veterinaria";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/about": Record<string, never>;
			"/camilo": Record<string, never>;
			"/sverdle": Record<string, never>;
			"/sverdle/how-to-play": Record<string, never>;
			"/veterinaria": Record<string, never>
		};
		Pathname(): "/" | "/about" | "/about/" | "/camilo" | "/camilo/" | "/sverdle" | "/sverdle/" | "/sverdle/how-to-play" | "/sverdle/how-to-play/" | "/veterinaria" | "/veterinaria/";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/favicon.svg" | "/robots.txt" | string & {};
	}
}