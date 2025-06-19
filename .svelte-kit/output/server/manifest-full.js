export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","favicon.png","img/.DS_Store","img/Client.webp","img/Driver.webp","img/Landing-3.webp","img/dad_1.webp","img/favicon/.DS_Store","img/favicon/about.txt","img/favicon/android-chrome-192x192.png","img/favicon/android-chrome-512x512.png","img/favicon/apple-touch-icon.png","img/favicon/favicon-16x16.png","img/favicon/favicon-32x32.png","img/favicon/favicon-32x32.png.png","img/favicon/favicon.ico","img/favicon/site.webmanifest","img/girl1.jpg","img/girl2.jpg","img/girl3.jpg","img/girl4.png","img/priceana.png","img/profile1.jpg","img/screenshots/.DS_Store","img/screenshots/near2.png","img/screenshots/nearby.png","img/sec.avif","img/sec.jpg","index.html","robots.txt","screenshots/.DS_Store","screenshots/near2.png","screenshots/nearby.png","themes/.DS_Store","themes/fonts/.DS_Store","themes/fonts/Nunito/Nunito-Black.ttf","themes/fonts/Nunito/Nunito-BlackItalic.ttf","themes/fonts/Nunito/Nunito-Bold.ttf","themes/fonts/Nunito/Nunito-BoldItalic.ttf","themes/fonts/Nunito/Nunito-ExtraBold.ttf","themes/fonts/Nunito/Nunito-ExtraBoldItalic.ttf","themes/fonts/Nunito/Nunito-ExtraLight.ttf","themes/fonts/Nunito/Nunito-ExtraLightItalic.ttf","themes/fonts/Nunito/Nunito-Italic.ttf","themes/fonts/Nunito/Nunito-Light.ttf","themes/fonts/Nunito/Nunito-LightItalic.ttf","themes/fonts/Nunito/Nunito-Regular.ttf","themes/fonts/Nunito/Nunito-SemiBold.ttf","themes/fonts/Nunito/Nunito-SemiBoldItalic.ttf"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".txt":"text/plain",".webmanifest":"application/manifest+json",".jpg":"image/jpeg",".avif":"image/avif",".html":"text/html",".ttf":"font/ttf"},
	_: {
		client: {start:"_app/immutable/entry/start.YqfFzqes.js",app:"_app/immutable/entry/app.CWQ4qgfH.js",imports:["_app/immutable/entry/start.YqfFzqes.js","_app/immutable/chunks/B_PdeQ9u.js","_app/immutable/chunks/DWX-CblI.js","_app/immutable/chunks/D7NAog8X.js","_app/immutable/entry/app.CWQ4qgfH.js","_app/immutable/chunks/DWX-CblI.js","_app/immutable/chunks/ZSwmcxwl.js","_app/immutable/chunks/F6T_R6ON.js","_app/immutable/chunks/3szAqqJG.js","_app/immutable/chunks/D7NAog8X.js","_app/immutable/chunks/D4Y2jHfP.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
