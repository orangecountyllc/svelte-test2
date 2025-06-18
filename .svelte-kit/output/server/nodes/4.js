import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/4.FryzG992.js","_app/immutable/chunks/BJ4OAVPy.js","_app/immutable/chunks/l-OOohzE.js","_app/immutable/chunks/DmoG8Bov.js","_app/immutable/chunks/UZF9LZrx.js","_app/immutable/chunks/Csi7Jf8V.js","_app/immutable/chunks/CTYm7GQV.js","_app/immutable/chunks/BRzKQYUk.js","_app/immutable/chunks/uzQXSLo-.js","_app/immutable/chunks/ClcZjlTG.js"];
export const stylesheets = ["_app/immutable/assets/4.B3hdbCZO.css"];
export const fonts = [];
