import * as universal from '../entries/pages/about/_page.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/about/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/about/+page.js";
export const imports = ["_app/immutable/nodes/3.Ja6_83gF.js","_app/immutable/chunks/Dh7teS_2.js","_app/immutable/chunks/l-OOohzE.js","_app/immutable/chunks/BJ4OAVPy.js","_app/immutable/chunks/BT4rR18z.js","_app/immutable/chunks/UZF9LZrx.js"];
export const stylesheets = [];
export const fonts = [];
