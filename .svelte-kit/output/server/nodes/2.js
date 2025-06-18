import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.BunKissf.js","_app/immutable/chunks/BJ4OAVPy.js","_app/immutable/chunks/l-OOohzE.js","_app/immutable/chunks/BT4rR18z.js","_app/immutable/chunks/UZF9LZrx.js","_app/immutable/chunks/CTYm7GQV.js","_app/immutable/chunks/DmoG8Bov.js","_app/immutable/chunks/BRzKQYUk.js"];
export const stylesheets = ["_app/immutable/assets/2.sTI-GHXi.css"];
export const fonts = [];
