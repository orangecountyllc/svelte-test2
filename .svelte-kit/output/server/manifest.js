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
			__memo(() => import('./nodes/4.js'))
		],
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
