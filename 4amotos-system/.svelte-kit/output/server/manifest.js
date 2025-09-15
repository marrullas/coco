export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.svg","robots.txt"]),
	mimeTypes: {".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B5hJt2iH.js",app:"_app/immutable/entry/app.nEJsPbp6.js",imports:["_app/immutable/entry/start.B5hJt2iH.js","_app/immutable/chunks/DXozKfF2.js","_app/immutable/chunks/DaYi9sW_.js","_app/immutable/chunks/D59KID4S.js","_app/immutable/chunks/BW75B2R1.js","_app/immutable/entry/app.nEJsPbp6.js","_app/immutable/chunks/D59KID4S.js","_app/immutable/chunks/BW75B2R1.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DaYi9sW_.js","_app/immutable/chunks/uK8-taIZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/4.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set(["/","/about","/sverdle/how-to-play"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
