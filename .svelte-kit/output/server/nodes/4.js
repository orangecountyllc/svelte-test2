import * as server from '../entries/pages/sverdle/_page.server.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/sverdle/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/sverdle/+page.server.js";
export const imports = ["_app/immutable/nodes/4.CGEUA1oc.js","_app/immutable/chunks/3szAqqJG.js","_app/immutable/chunks/DWX-CblI.js","_app/immutable/chunks/ZSwmcxwl.js","_app/immutable/chunks/F6T_R6ON.js","_app/immutable/chunks/D4Y2jHfP.js","_app/immutable/chunks/BjM4firo.js","_app/immutable/chunks/B_PdeQ9u.js","_app/immutable/chunks/D7NAog8X.js"];
export const stylesheets = ["_app/immutable/assets/4.B3hdbCZO.css"];
export const fonts = [];
