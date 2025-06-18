export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CFjtSmSO.js",app:"_app/immutable/entry/app.CpHvK463.js",imports:["_app/immutable/entry/start.CFjtSmSO.js","_app/immutable/chunks/uzQXSLo-.js","_app/immutable/chunks/l-OOohzE.js","_app/immutable/chunks/ClcZjlTG.js","_app/immutable/entry/app.CpHvK463.js","_app/immutable/chunks/l-OOohzE.js","_app/immutable/chunks/DmoG8Bov.js","_app/immutable/chunks/UZF9LZrx.js","_app/immutable/chunks/BJ4OAVPy.js","_app/immutable/chunks/ClcZjlTG.js","_app/immutable/chunks/Csi7Jf8V.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/sverdle/how-to-play",
				pattern: /^\/sverdle\/how-to-play\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
